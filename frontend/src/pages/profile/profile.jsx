import HeaderContainer from "../../components/header/headerContainer";
import Footer from "../../components/footer/footer"
import './profile.css';

export default function Profile({ usuario, cerrarSesion }) {
  if (!usuario) {
    return (
      <div className="profile-page">
        <div className="loading-text">Cargando datos del usuario...</div>
      </div>
    );
  }

  // Obtener inicial del nombre para el avatar
  const inicial = usuario.nombre ? usuario.nombre.charAt(0).toUpperCase() : 'U';

  return (
    <div className="profile-page">
      <HeaderContainer />
      <div className="profile-container">
        <div className="profile-card">
          <div className="profile-header">
            <div className="profile-avatar">
              {inicial}
            </div>
            <h1 className="profile-title">Mi Perfil</h1>
            <p className="profile-subtitle">Información de tu cuenta</p>
          </div>

          <div className="profile-info">
            <div className="profile-field">
              <div className="field-icon">#</div>
              <div className="field-content">
                <div className="field-label">ID</div>
                <div className="field-value">{usuario.id}</div>
              </div>
            </div>

            <div className="profile-field">
              <div className="field-icon">👤</div>
              <div className="field-content">
                <div className="field-label">Nombre</div>
                <div className="field-value">{usuario.nombre}</div>
              </div>
            </div>

            <div className="profile-field">
              <div className="field-icon">📧</div>
              <div className="field-content">
                <div className="field-label">Email</div>
                <div className="field-value">{usuario.email}</div>
              </div>
            </div>

            <div className="profile-field">
              <div className="field-icon">🎯</div>
              <div className="field-content">
                <div className="field-label">Rol</div>
                <div className="field-value">
                  <span className="role-badge">{usuario.rol}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="profile-actions">
            <button onClick={cerrarSesion} className="logout-button">
              Cerrar Sesión
            </button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}