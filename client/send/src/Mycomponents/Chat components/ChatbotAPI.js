import axios from 'axios';

const arr=['headache','backpain','chestpain','cough','fainting','sore throat','fatigue','low body temperature','restlessness','fever','sunken eyes','nausea','blurredVision']
let arrdict =[]
let i =0
const API = {
    GetChatbotResponse: async message => {
      return new Promise(function(resolve, reject) {
        setTimeout(function() {
        if (message === "hi") {
            resolve("Hi! I am Dr.Pharma, I am here to help you make your health better.For that you'll have to answer a few questions about your conditions Do you feel any of the following symptoms:"+arr[i])
            i=i+1
        }
        else if (message==='no' || message==='yes'){
            arrdict.push(message)
            i=i+1
            if(i==arr.length){
                axios.post("http://127.0.0.1:8000/chat/disease/",arrdict).then(res=>console.log(res))
                resolve("You probably have: Jaundice. Info regarding the same: Jaundice is a term used to describe a yellowish tinge to the skin and the whites of the eye. Body fluids may also be yellow.The color of the skin and whites of the eyes will vary depending on levels of bilirubin. Bilirubin is a waste material found in the blood. Moderate levels lead to a yellow color, while very high levels will appear brown. An inflamed liver or obstructed bile duct can lead to jaundice, as well as other underlying conditions. Underlying conditions that may cause jaundice include:Acute inflammation of the liver: This may impair the ability of the liver to conjugate and secrete bilirubin, resulting in a buildup.Inflammation of the bile duct: This can prevent the secretion of bile and removal of bilirubin, causing jaundice. Obstruction of the bile duct: This prevents the liver from disposing of bilirubin. Hemolytic anemia: The production of bilirubin increases when large quantities of red blood cells are broken down. Gilberts syndrome: This is an inherited condition that impairs the ability of enzymes to process the excretion of bile. Cholestasis: This interrupts the flow of bile from the liver. The bile containing conjugated bilirubin remains in the liver instead of being excreted.Diagnosis: The yellowing of skin and eyes are likely to be the main clues a doctor will use before confirming a jaundice diagnosis.A physical examination will be carried out to look for signs of swelling of the liver and legs, ankles or feet, which might indicate cirrhosis of the liver.")
            }
            else resolve(arr[i])
        }
        else {
            resolve(arrdict);
        }
        }, 2000);
      });
    }
  };
  
export default API;