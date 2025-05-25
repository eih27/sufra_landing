export default function Home() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Sufra</h1>
      <p style={{ color: 'gray' }}>Mumbai's Food Redistribution Network</p>
      
      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem' }}>Give Food. Share Hope.</h2>
        <p>
          Sufra connects surplus food from homes, restaurants, and caterers to shelters across Mumbai.
        </p>
      </section>
      
      <section style={{ marginTop: '2rem' }}>
        <h3>How It Works</h3>
        <ul>
          <li>Post your excess food via the app</li>
          <li>We handle pickup and safe delivery</li>
          <li>Track your impact</li>
        </ul>
      </section>

      <section style={{ marginTop: '2rem', textAlign: 'center' }}>
        <button style={{
          backgroundColor: '#16a34a',
          color: 'white',
          padding: '0.75rem 1.5rem',
          borderRadius: '9999px',
          fontWeight: 'bold',
          marginTop: '1rem'
        }}>
          Get Early Access
        </button>
      </section>
    </div>
  );
}
