import './TopBar.sass';
import { FiArrowLeft, FiMoreHorizontal, FiExternalLink } from 'react-icons/fi';
import Config from '../../../config';

function TopBar({ back }) {
  const MontaCoder = () => window.open('https://github.com/MontaCoder', '_blank');
  const codeCanyon = () => window.open(
    'https://codecanyon.net/item/Blink-realtime-messaging-audio-video-conferencing-web-app-nodejs-react-webrtc-socketio/25737452',
    '_blank',
  );

  return (
    <div className="top-bar uk-flex uk-flex-between uk-flex-middle">
      <div className="nav">
        <div className="button" onClick={back}>
          <FiArrowLeft />
        </div>
      </div>
      <div className="nav">
        {Config.demo && (
          <div className="uk-inline">
            <div className="button" type="button">
              <FiMoreHorizontal />
            </div>
            <div data-uk-dropdown="mode: click; offset: 5; boundary: .top-bar; pos: bottom-right">
              <div className="link" onClick={MontaCoder}>
                MontaCoder
                <div className="icon">
                  <FiExternalLink />
                </div>
              </div>
              <div className="link" onClick={codeCanyon}>
                CodeCanyon
                <div className="icon">
                  <FiExternalLink />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TopBar;
