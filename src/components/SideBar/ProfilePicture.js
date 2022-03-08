import Image from 'next/image';
import {PFPContainer} from './Elements';
import pfp from '../../images/pfp.jpg';

function ProfilePicture() {
  return (
    <PFPContainer>
      <Image
        alt="Profile Picture ???"
        src={pfp}
        width={125}
        height={125}
        priority
        quality={100}
        layout="fixed"
        objectFit="cover"
      />
    </PFPContainer>
  );
}

export default ProfilePicture;
