
type MasalaChai = {type: "masala"; spicelevel: number}
type GingerChai = {type: "ginger"; amount: number}
type ElaichiChai = {type: "Elaichi"; aroma: number}

type Chai = MasalaChai | GingerChai | ElaichiChai

function MakeChai(Order: Chai){
    switch (Order.type) {
        case "masala":
            return `Masala chai`
            break;
        
        case "Elaichi":
            return `Elaichi chai`
            break;
        
        case "ginger":
            return `ginger chai`
            break;
        
    }
}


function isStringArray(arr: unknown); arr is string[]{
    
}