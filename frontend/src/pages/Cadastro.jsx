import "../index.css";

export default function Cadastro() {
  return (
    <div className="auth-page">
      <div className="auth-content cadastro">
        <h1>Verso & Vênus</h1>
        <p>Crie sua conta para começar uma nova história!</p>

        <div className="auth-card cadastro-card">
          <h2>Criar conta</h2>
          <small>Preencha os dados para fazer o cadastro</small>

          <label>Nome completo</label>
          <input placeholder="Digite seu nome completo..." />

          <label>E-mail</label>
          <input type="email" placeholder="seu@email.com" />

          <label>Senha</label>
          <input type="password" placeholder="Digite sua senha..." />

          <label>Confirmar senha</label>
          <input type="password" placeholder="Confirme sua senha..." />

          <button className="btn-auth">Cadastrar</button>

          <p className="auth-link">
            Já tem uma conta? <span>Faça login</span>
          </p>
        </div>
      </div>
    </div>
  );
}