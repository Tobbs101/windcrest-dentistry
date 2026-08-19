import DoctorProfile from "@/components/doctor-profile";
import HeroBg from "@/assets/meet-dr-patrick-moore.jpg";

const MeetDrPatrickMooreBody = () => {
  return (
    <DoctorProfile
      name="Dr. Patrick Moore"
      credentials="DDS"
      specialty="Orthodontist"
      image={HeroBg}
      bio="Dr. Moore provides thoughtful orthodontic care designed to create strong, healthy smiles with lasting results. He values the confidence a transformed smile can bring to every patient."
      highlights={[
        "Graduate of the University of Texas Health Science Center at San Antonio",
        "Former U.S. Army dentist with international orthodontic experience",
        "Committed to precise, long-term orthodontic results",
      ]}
    />
  );
};

export default MeetDrPatrickMooreBody;
