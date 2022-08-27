import css from '../Cast.module.css';
import propTypes from 'prop-types';

export default function CastMarkup({credits}) {
  return (
    credits !== null &&
        credits.map(credit => {
          const { character, name, profile_path, id } = credit;
          const img =
            profile_path &&
            'https://image.tmdb.org/t/p/original/' + profile_path;

           return (
              
             
              
             <li key={id} className={css.item}>
               <div className={css.imgWrapper}>
                 {img ? (
                   <img src={img} alt={name} width={200} className={css.img} />
                 ) : (
                   <>
                     <img
                       src=" http://placeimg.com/250/350/animals/sepia"
                       alt={name}
                       width={200}
                       height={200}
                       className={css.img}
                     />
                   </>
                 )}
               </div>
               <div className={css.aboutWrapper}>
                 <p className={css.about}>
                   <span className={css.span}> Character:</span>
                   {character}
                 </p>
                 <p className={css.about}>
                   <span className={css.span}> Name:</span>
                   {name}
                 </p>
               </div>
             </li>
           );
        })
  );
}

CastMarkup.propTypes = {
  credit: propTypes.object,
}