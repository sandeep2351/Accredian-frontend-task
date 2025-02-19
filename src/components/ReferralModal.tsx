
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

interface ReferralFormData {
  referrerName: string;
  referrerEmail: string;
  refereeName: string;
  refereeEmail: string;
  course: string;
}

const ReferralModal = () => {
  const [formData, setFormData] = useState<ReferralFormData>({
    referrerName: "",
    referrerEmail: "",
    refereeName: "",
    refereeEmail: "",
    course: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/referrals`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to submit referral");

      toast({
        title: "Success!",
        description: "Your referral has been submitted successfully.",
      });

      setFormData({
        referrerName: "",
        referrerEmail: "",
        refereeName: "",
        refereeEmail: "",
        course: "",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit referral. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
        >
          Refer Now
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] backdrop-blur-lg bg-white/90 border border-gray-200 shadow-2xl animate-scale-in">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-center">Refer a Friend</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="referrerName">Your Name</Label>
              <Input
                id="referrerName"
                name="referrerName"
                value={formData.referrerName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/50 transition-all duration-200"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="referrerEmail">Your Email</Label>
              <Input
                id="referrerEmail"
                name="referrerEmail"
                type="email"
                value={formData.referrerEmail}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/50 transition-all duration-200"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="refereeName">Friend's Name</Label>
              <Input
                id="refereeName"
                name="refereeName"
                value={formData.refereeName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/50 transition-all duration-200"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="refereeEmail">Friend's Email</Label>
              <Input
                id="refereeEmail"
                name="refereeEmail"
                type="email"
                value={formData.refereeEmail}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/50 transition-all duration-200"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="course">Course Name</Label>
              <Input
                id="course"
                name="course"
                value={formData.course}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/50 transition-all duration-200"
              />
            </div>
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary hover:bg-primary/90 text-white py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            {isSubmitting ? "Submitting..." : "Submit Referral"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ReferralModal;
