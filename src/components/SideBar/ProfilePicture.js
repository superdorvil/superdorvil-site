import Image from 'next/image';
import {
  PFPContainer,
  Name,
  Job,
} from './Elements';
import pfp from '../../images/pfp.jpg';

function ProfilePicture() {
  return (
    <PFPContainer>
      <Image
        alt="Profile Picture ???"
        src={pfp}
        width={70}
        height={50}
        priority
      />
      <Name>Dorvil Gabriel</Name>
      <Job>Full Stack Blockchain Developer</Job>
    </PFPContainer>
  );
}

export default ProfilePicture;
