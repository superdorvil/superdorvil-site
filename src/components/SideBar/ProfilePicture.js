import Image from 'next/image';
import {PFPContainer} from './Elements';
import profilePicture from '../../images/ProfilePicture.jpg';

function ProfilePicture() {
  return (
    <PFPContainer>
      <Image
        alt="Profile Picture ???"
        src={profilePicture}
        priority
        quality={100}
        layout="intrinsic"
        objectFit="cover"
      />
    </PFPContainer>
  );
}

export default ProfilePicture;
