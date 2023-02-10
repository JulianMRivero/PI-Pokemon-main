
const onlyText = /^[a-zA-Z]+$/

export const validations = ({name,hp,attack,defense,speed,height,weight,image,types}) =>{
    const errors = {}
    if(name.length < 3 || name.length > 10){errors.name = "Must be a minimum of 3 characters and maximum of 10 characters"} 
    if(!onlyText.test(name)) {errors.name = "No numbers or spaces are allowed"}
    if(!name){errors.name = "Enter a name"} 
    
    
    if(onlyText.test(hp)){errors.hp = "Only numbers from 1-200"}
    if(hp <= 0 || hp > 200){errors.hp = "Must enter a number between 1-200"}
    if(!hp){errors.hp = "Enter health"}

    if(onlyText.test(attack)){errors.attack = "Only numbers from 1-200"}
    if(attack <= 0 || attack > 200){errors.attack = "Must enter a number between 1-200"}
    if(!attack){errors.attack = "Enter attack"}

    if(onlyText.test(defense)){errors.defense = "Only numbers from 1-200"}
    if(defense <= 0 || defense > 200){errors.defense = "Must enter a number between 1-200"}
    if(!defense){errors.defense = "Enter defense"}

    if(onlyText.test(speed)){errors.speed = "Only numbers from 1-200"}
    if(speed <= 0 || speed > 200){errors.speed = "Must enter a number between 1-200"}
    if(!speed){errors.speed = "Enter speed"}

    if(onlyText.test(height)){errors.height = "Only numbers from 1-400(cm)"}
    if(height <= 0 || height > 400){errors.height = "Must enter a number between 1-400(cm)"}
    if(!height){errors.height = "Enter height"}

    if(onlyText.test(weight)){errors.weight = "Only numbers from 1-500(kg)"}
    if(weight <= 0 || weight > 500){errors.weight = "Must enter a number between 1-500(kg)"}
    if(!weight){errors.weight = "Enter weight"}

    if(types.length <= 0){errors.types = "Must select at least one type"}
    
    return errors
}




