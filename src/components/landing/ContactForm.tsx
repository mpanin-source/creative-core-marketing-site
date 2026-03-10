import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Shield, Clock, AlertTriangle } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    serviceType: "",
    adSpend: "",
    challenge: "",
    email: "",
    phone: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setShowSuccess(true);
    toast({
      title: "Audit Request Received!",
      description:
        "Your personalized Core Funnel Audit will be delivered within 48 hours.",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const canSubmit =
    formData.name && formData.email && formData.serviceType && formData.adSpend;

  const inputClasses =
    "bg-[#1A1A1A] border border-[#444444] text-[#FFFFFF] placeholder:text-[#BBBBBB] focus:border-primary focus:ring-primary/40 focus:ring-2 h-12 transition-all duration-200";
  const labelClasses =
    "block text-[#FFFFFF]/90 text-xs uppercase tracking-wider mb-2 font-medium";

  if (showSuccess) {
    return (
      <section
        className="relative section-padding bg-[hsl(220,20%,8%)]"
        id="contact"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(217,91%,53%,0.1),transparent_70%)]" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
            <Shield className="w-10 h-10 text-primary" />
          </div>
          <h2 className="font-display text-3xl md:text-5xl text-primary uppercase mb-4">
            AUDIT REQUEST RECEIVED
          </h2>
          <p className="text-xl text-[#FFFFFF]/90 mb-6">
            Your personalized Core Funnel Audit will be delivered within 48
            hours as a 15-minute Loom breakdown.
          </p>
          <p className="text-[#FFFFFF]/60 text-sm">
            Check your inbox for confirmation. Next available slots: March
            28–31.
          </p>
        </div>
      </section>
    );
  }

  return (
      <section
        className="relative section-padding bg-[hsl(220,20%,8%)]"
        id="contact"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(217,91%,53%,0.1),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,hsl(220,20%,5%,0.5))]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="max-w-5xl mx-auto">
          {/* Scarcity Banner */}
          <div className="max-w-2xl mx-auto mb-10 rounded-xl border border-amber-500/30 bg-amber-500/5 p-5 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <AlertTriangle className="w-5 h-5 text-amber-400" />
              <span className="font-display text-amber-400 text-lg tracking-wider">
                Q1 COHORT ENROLLMENT CLOSES: MARCH 31
              </span>
            </div>
            <p className="text-[#FFFFFF]/70 text-sm">
              Only <span className="text-amber-400 font-bold">2 spots remaining</span>{" "}
              for launch in March. After March 31, next enrollment opens June 1
              for Q3 roofing season.
            </p>
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="font-display text-primary uppercase text-3xl sm:text-4xl md:text-5xl tracking-wider font-bold mb-6">
              SCHEDULE YOUR FREE CORE FUNNEL AUDIT
            </h2>
            <p className="text-lg text-[#FFFFFF]/90 max-w-3xl mx-auto leading-relaxed">
              In 15 minutes, we'll show you exactly where your funnel is leaking
              and provide a seasonal blueprint to fix it this quarter.
            </p>
          </div>

          <div className="max-w-xl mx-auto">
            <div
              className="bg-[#0d0d0d] border border-[#333] rounded-xl p-6 sm:p-8"
              style={{
                boxShadow: "0 0 60px hsl(217 91% 53% / 0.08)",
              }}
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className={labelClasses}>Name *</label>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label className={labelClasses}>Company Name</label>
                  <Input
                    type="text"
                    name="company"
                    placeholder="Your company"
                    value={formData.company}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label className={labelClasses}>Service Type *</label>
                  <Select
                    value={formData.serviceType}
                    onValueChange={(v) =>
                      setFormData((prev) => ({ ...prev, serviceType: v }))
                    }
                  >
                    <SelectTrigger className={inputClasses}>
                      <SelectValue placeholder="Select your industry" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1A1A1A] border-[#333333]">
                      <SelectItem
                        value="hvac"
                        className="text-[#FFFFFF] focus:bg-primary/20 focus:text-[#FFFFFF]"
                      >
                        HVAC
                      </SelectItem>
                      <SelectItem
                        value="roofing"
                        className="text-[#FFFFFF] focus:bg-primary/20 focus:text-[#FFFFFF]"
                      >
                        Roofing
                      </SelectItem>
                      <SelectItem
                        value="solar"
                        className="text-[#FFFFFF] focus:bg-primary/20 focus:text-[#FFFFFF]"
                      >
                        Solar
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className={labelClasses}>
                    Current Monthly Ad Spend *
                  </label>
                  <Select
                    value={formData.adSpend}
                    onValueChange={(v) =>
                      setFormData((prev) => ({ ...prev, adSpend: v }))
                    }
                  >
                    <SelectTrigger className={inputClasses}>
                      <SelectValue placeholder="Select your ad spend" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1A1A1A] border-[#333333]">
                      <SelectItem
                        value="under-1k"
                        className="text-[#FFFFFF] focus:bg-primary/20 focus:text-[#FFFFFF]"
                      >
                        Under $1K/month
                      </SelectItem>
                      <SelectItem
                        value="1k-5k"
                        className="text-[#FFFFFF] focus:bg-primary/20 focus:text-[#FFFFFF]"
                      >
                        $1K – $5K/month
                      </SelectItem>
                      <SelectItem
                        value="5k-10k"
                        className="text-[#FFFFFF] focus:bg-primary/20 focus:text-[#FFFFFF]"
                      >
                        $5K – $10K/month
                      </SelectItem>
                      <SelectItem
                        value="10k-plus"
                        className="text-[#FFFFFF] focus:bg-primary/20 focus:text-[#FFFFFF]"
                      >
                        $10K+/month
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className={labelClasses}>
                    Biggest Challenge Right Now
                  </label>
                  <Textarea
                    name="challenge"
                    placeholder="What's your biggest pain point with your current ads?"
                    value={formData.challenge}
                    onChange={handleChange}
                    className="bg-[#1A1A1A] border border-[#444444] text-[#FFFFFF] placeholder:text-[#BBBBBB] focus:border-primary focus:ring-primary/40 focus:ring-2 transition-all duration-200 min-h-[80px]"
                  />
                </div>

                <div>
                  <label className={labelClasses}>Email *</label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label className={labelClasses}>Phone</label>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="(555) 123-4567"
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={!canSubmit || isSubmitting}
                  className="w-full h-14 text-base font-bold uppercase tracking-wider bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 disabled:opacity-50"
                  style={{
                    boxShadow: canSubmit
                      ? "0 0 30px hsl(var(--primary) / 0.5)"
                      : "none",
                  }}
                >
                  {isSubmitting ? "SUBMITTING..." : "SCHEDULE MY FREE CORE FUNNEL AUDIT"}
                  {!isSubmitting && <ArrowRight className="ml-2 w-5 h-5" />}
                </Button>
              </form>

              {/* Trust */}
              <div className="mt-6 pt-6 border-t border-[#222] space-y-3">
                <div className="flex items-center gap-3 text-[#BBBBBB] text-sm">
                  <Shield className="w-4 h-4 text-primary shrink-0" />
                  <span>
                    This is a 15-minute Loom breakdown—no call, no pressure.
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Clock className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-[#BBBBBB]">
                    Next available audit slots:{" "}
                    <span className="text-primary font-semibold">
                      March 28–31
                    </span>{" "}
                    (Q1 cohort). Miss this window → June 1 for Q3.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
