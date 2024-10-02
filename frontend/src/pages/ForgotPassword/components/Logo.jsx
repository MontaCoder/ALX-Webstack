import logo from '../../../assets/logo.png';

function Logo() {
  return (
    <div className="uk-text-center uk-margin logo">
      <img src={logo} alt="Logo" style={{ width: '700px', height: 'auto' }} />
    </div>
  );
}

export default Logo;
