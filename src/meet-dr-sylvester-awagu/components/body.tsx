import DoctorProfile from "@/components/doctor-profile";
import HeroBg from "@/assets/meet-dr-sylvester-awagu.jpg";

const MeetDrSlyvesterAwaguBody = () => {
  return (
    <DoctorProfile
      name="Dr. Sylvester Awagu"
      credentials="DMD, MS"
      specialty="Board-Certified Pediatric Dentist"
      image={HeroBg}
      bio="Dr. Awagu helps children feel comfortable at the dentist while building healthy habits and trust that can last a lifetime. He provides compassionate pediatric care tailored to each child and family."
      highlights={[
        "Advanced pediatric dentistry training at Baylor College of Dentistry",
        "Experienced in sedation dentistry and care for children with special needs",
        "Focused on positive, fear-free dental experiences",
      ]}
    />
  );
};

export default MeetDrSlyvesterAwaguBody;
