import DoctorProfile from "@/components/doctor-profile";
import HeroBg from "@/assets/meet-dr-donald-mills.jpg";

const MeetDrDonaldMillsBody = () => {
  return (
    <DoctorProfile
      name="Dr. Donald Mills"
      credentials="DDS"
      specialty="Orthodontist"
      image={HeroBg}
      bio="With more than 40 years of orthodontic experience, Dr. Mills helps children gain confidence through healthy, beautiful smiles. His approach centers on trust, personal attention, and lasting care."
      highlights={[
        "More than four decades of orthodontic experience",
        "Graduate of the University of Texas Dental Branch",
        "Dedicated to personalized care for children and families",
      ]}
    />
  );
};

export default MeetDrDonaldMillsBody;
