// Estilos "Rose Edition" para el Dashboard
const styles = {
    container: {
        minHeight: '100vh',
        backgroundColor: 'rgba(255, 255, 255, 0.9)', // Blanco semi-transparente para ver las flores de fondo
        fontFamily: "'Segoe UI', sans-serif",
        backdropFilter: 'blur(10px)' // Efecto vidrio esmerilado
    },
    navbar: {
        display: 'flex', justifyContent: 'space-between', padding: '1rem 2rem',
        backgroundColor: 'white', borderBottom: '2px solid #fce4ec',
        boxShadow: '0 4px 15px rgba(212, 130, 150, 0.1)'
    },
    logo: { margin: 0, color: '#9e475b', fontFamily: 'serif', letterSpacing: '1px' },
    logoutBtn: {
        padding: '8px 16px', backgroundColor: 'white', color: '#9e475b',
        border: '1px solid #9e475b', borderRadius: '20px', cursor: 'pointer', fontWeight: 'bold'
    },
    content: { padding: '2rem', maxWidth: '1000px', margin: '0 auto' },
    headerTitle: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' },
    addButton: {
        backgroundColor: '#d48296', color: 'white', border: 'none',
        padding: '12px 24px', borderRadius: '25px', cursor: 'pointer',
        fontWeight: 'bold', boxShadow: '0 4px 10px rgba(212, 130, 150, 0.4)'
    },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '30px' },
    card: {
        backgroundColor: 'white', padding: '20px', borderRadius: '15px',
        borderLeft: '5px solid #d48296', boxShadow: '0 4px 15px rgba(212, 130, 150, 0.1)'
    },
    cardTitle: { margin: '0 0 10px 0', fontSize: '0.9rem', color: '#9e475b', textTransform: 'uppercase' },
    cardValue: { margin: 0, fontSize: '2rem', fontWeight: 'bold', color: '#4a4a4a' },
    section: { backgroundColor: 'white', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(212, 130, 150, 0.1)' },
    tableContainer: { overflowX: 'auto' },
    table: { width: '100%', borderCollapse: 'collapse', minWidth: '600px' },
    th: { padding: '15px', textAlign: 'left', borderBottom: '2px solid #ffebee', color: '#9e475b', fontWeight: 'bold' },
    td: { padding: '15px', borderBottom: '1px solid #ffebee', verticalAlign: 'middle' },
    productImg: { width: '50px', height: '50px', objectFit: 'cover', borderRadius: '8px', border: '1px solid #ffebee' },
    badge: { backgroundColor: '#ffebee', padding: '5px 10px', borderRadius: '15px', fontSize: '12px', color: '#9e475b', fontWeight: '600' },
    deleteBtn: { color: '#e57373', border: '1px solid #ffebee', backgroundColor: 'white', padding: '5px 10px', borderRadius: '15px', cursor: 'pointer' },

    // Modal Rosa
    modalOverlay: { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(50, 20, 30, 0.6)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 },
    modalContent: { backgroundColor: 'white', padding: '30px', borderRadius: '20px', width: '90%', maxWidth: '500px', borderTop: '10px solid #d48296' },
    label: { display: 'block', marginBottom: '5px', fontWeight: 'bold', fontSize: '14px', color: '#666' },
    input: { width: '100%', padding: '12px', border: '1px solid #e0e0e0', borderRadius: '10px', boxSizing: 'border-box', backgroundColor: '#fffafa' },
    saveBtn: { flex: 1, padding: '12px', backgroundColor: '#d48296', color: 'white', border: 'none', borderRadius: '10px', cursor: 'pointer', fontWeight: 'bold' },
    cancelBtn: { flex: 1, padding: '12px', backgroundColor: '#f5f5f5', color: '#666', border: 'none', borderRadius: '10px', cursor: 'pointer' }
};

export default Dashboard;