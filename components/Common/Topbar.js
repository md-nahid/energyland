import Container from '../Container';
import { Icon } from '@iconify/react';
import { socialIcons } from '../../cms/social.data';
export default function Topbar() {
  return (
    <div className="bg-lightGreen hidden md:block px-2">
      <Container className="py-4 text-white flex justify-between items-center">
        <div className="flex items-center text-sm">
          <p className="flex items-center mr-4">
            <span className="mr-2">
              <Icon icon="carbon:phone-voice-filled" />
            </span>
            987-654-321-09
          </p>
          <p className="flex items-center mr-4">
            <span className="mr-2">
              <Icon icon="bi:envelope" />
            </span>
            example@example.com
          </p>
          <p className="flex items-center">
            <span className="mr-2">
              <Icon icon="gis:location-poi" />
            </span>
            Solar Energy, LD 32614, UK
          </p>
        </div>
        <div className="flex items-center">
          {socialIcons.map((s) => (
            <a key={s.id} href={s.link} target="_blank" className="inline-block text-xl ml-5">
              {s.icon}
            </a>
          ))}
        </div>
      </Container>
    </div>
  );
}
