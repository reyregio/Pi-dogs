import Card from "../Card/Card";
import style from "./CardContainer.module.css";
const CardContainer = () => {
    const dogs = [
        {
            name: "Beagle",
            heightMin: "33 cm",
            heightMax: "41 cm",
            weightMin: "9 kg",
            weightMax: "11 kg",
            life_spanMax: "15 años",
            life_spanMin: "12 años",
            temperament: ["Amigable", "Inteligente", "Alegre"],
            image:
            "https://media.gettyimages.com/id/170462856/es/foto/perro-trabajar-c%C3%B3modamente-en-su-hogar-lejos-del-hogar.jpg?s=170667a&w=gi&k=20&c=ANj-b3D2m2RIYSk5dihaYq-y-ZtltaJs58rh88jIxX0=",
        },
        {
            name: "Labrador Retriever",
            heightMin: "55 cm",
            heightMax: "62 cm",
            weightMin: "25 kg",
            weightMax: "36 kg",
            life_spanMax: "14 años",
            life_spanMin: "10 años",
            temperament: ["Amigable", "Inteligente", "Juguetón"],
            image:
            "https://media.gettyimages.com/photos/young-yellow-labrador-retriever-in-the-garden-picture-id610009652?s=170667a&w=gi&k=20&c=ANj-b3D2m2RIYSk5dihaYq-y-ZtltaJs58rh88jIxX0=",
        },
        {
            name: "Bulldog Francés",
            heightMin: "28 cm",
            heightMax: "33 cm",
            weightMin: "8 kg",
            weightMax: "14 kg",
            life_spanMax: "12 años",
            life_spanMin: "10 años",
            temperament: ["Juguetón", "Inteligente", "Afable"],
            image:
            "https://media.gettyimages.com/photos/french-bulldog-picture-id157215247?s=170667a&w=gi&k=20&c=ANj-b3D2m2RIYSk5dihaYq-y-ZtltaJs58rh88jIxX0=",
        },
        {
            name: "Husky Siberiano",
            heightMin: "50 cm",
            heightMax: "60 cm",
            weightMin: "20 kg",
            weightMax: "27 kg",
            life_spanMax: "15 años",
            life_spanMin: "12 años",
            temperament: ["Amigable", "Inteligente", "Energético"],
            image:
            "https://media.gettyimages.com/photos/closeup-of-siberian-husky-dog-in-the-forest-picture-id1140845560?s=170667a&w=gi&k=20&c=ANj-b3D2m2RIYSk5dihaYq-y-ZtltaJs58rh88jIxX0=",
        },
        {
            name: "Golden Retriever",
            heightMin: "55 cm",
            heightMax: "61 cm",
            weightMin: "25 kg",
            weightMax: "34 kg",
            life_spanMax: "12 años",
            life_spanMin: "10 años",
            temperament: ["Amigable", "Inteligente", "Confiable"],
            image:
            "https://media.gettyimages.com/photos/adult-golden-retriever-dog-in-nature-picture-id622764924?s=170667a&w=gi&k=20&c=ANj-b3D2m2RIYSk5dihaYq-y-ZtltaJs58rh88jIxX0=",
        },
        {
            name: "Chihuahua",
            heightMin: "15 cm",
            heightMax: "23 cm",
            weightMin: "1 kg",
            weightMax: "3 kg",
            life_spanMax: "20 años",
            life_spanMin: "12 años",
            temperament: ["Valiente", "Alerta", "Leal"],
            image:
            "https://media.gettyimages.com/photos/chihuahua-picture-id1044889656?s=170667a&w=gi&k=20&c=ANj-b3D2m2RIYSk5dihaYq-y-ZtltaJs58rh88jIxX0=",
        },
    ];
    
    return (
        <div className={style.container}>
        {dogs.map((dog) => {
            return (
                <Card
                name={dog.name}
                heightMin={dog.heightMin}
                weightMin={dog.weightMin}
                lifeSpanMax={dog.life_spanMax}
                temperament={dog.temperament}
                image={dog.image}
                />
                );
            })}
            </div>
            );
        };
        
        export default CardContainer;
        