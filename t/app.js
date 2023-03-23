

const observer= new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        entry.target.classList.toggle('show',entry.isIntersecting)
    })  
    // console.log(entries)
},{
    threshold:1,
    // rootMargin:"-50px",
})
const cardContainer=document.querySelector(".card-container")

const loadNewCard=()=>{
    for (let i=0;i<10;i++){
        const card=document.createElement("div")
        card.innerHTML="New card"
        card.classList.add("card")
        observer.observe(card)
        cardContainer.append(card)
    }
}



const lastCardObserver= new IntersectionObserver(entries=>{
    const lastCard = entries[0]
    if (lastCard.isIntersecting){
        loadNewCard()
        lastCardObserver.unobserve(lastCard.target)
        lastCardObserver.observe(document.querySelector('.card:last-child'))
    }
},{
    rootMargin: "100px",
})

lastCardObserver.observe(document.querySelector('.card:last-child'))

const cards= document.querySelectorAll('.card')

cards.forEach(card => {
    observer.observe(card)    
});

