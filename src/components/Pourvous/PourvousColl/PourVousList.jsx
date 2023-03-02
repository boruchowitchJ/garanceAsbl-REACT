import PourVousCard from "./PourVousCard"



const PourVousList = () => {
    const pourvousliste = [
        { id:1, titre:"Echappée Belle", description: "L’autodéfense est tout ce qui rend nos vies plus sûres.",  affiche:"../../assets/images/femme3.jpg", lien:"/echappesbelles"},
        { id:2, titre:"Sweeney Todd ", description: "Tim burton", affiche:"./assets/images/SweeneyTodd.jpg " }, 
        { id:3, titre:"Sweeney Todd ", description: "Tim burton", affiche:"./assets/images/SweeneyTodd.jpg " } ,
        { id:4, titre:"Sweeney Todd ", description: "Tim burton", affiche:"./assets/images/SweeneyTodd.jpg " } ,
        { id:5, titre:"Sweeney Todd ", description: "Tim burton", affiche:"./assets/images/SweeneyTodd.jpg " } ,
        { id:5, titre:"Sweeney Todd ", description: "Tim burton", affiche:"./assets/images/SweeneyTodd.jpg " } 
        
      ]
       
    return (
        <div class="container my-5">
            <div class="row">
           { pourvousliste.map(p => <PourVousCard key ={p.id} titre={p.titre} description={p.description} affiche={p.affiche} lien={p.lien}/>)}
</div>
        </div>
    )
}

export default PourVousList;