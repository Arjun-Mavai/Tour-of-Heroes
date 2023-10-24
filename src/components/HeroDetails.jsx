import { Link, useParams } from 'react-router-dom';
import { heroes } from '../data';

export default function HeroDetails() {
  const { heroId } = useParams();
  const numericHeroId = parseInt(heroId, 10);
  const hero = heroes.find((h) => h.id === numericHeroId);

  if (!hero) return <p>No hero found with : {heroId}</p>;

  return (
    <div style={{ marginRight: '10px' }}>
      <h3>Hero ID : {hero.id}</h3>
      <Link to="/">Back to Home</Link>
      <h2>Hero Name : {hero.name}</h2>
      <img
        src={hero.image}
        alt="not found"
        height="150px"
        width="150px"
        style={{ borderRadius: '10px' , boxShadow:'10px 5px 4px rgba(190,30,190,0.6)'}}
      />
    </div>
  );
}
