// Componente para separar cada personaje

const Character = ({ name, image, loading, error }) => {
    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="character-container">
            <p>{name}</p>
            <img src={image} alt={name} />
        </div>
    );
};

export default Character;
