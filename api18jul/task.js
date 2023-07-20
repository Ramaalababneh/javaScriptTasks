const table = document.getElementById('tab');
    async function asFun()
    {
       const startReq = await fetch ('https://fakestoreapi.com/products?limit=5') // getAPI
        const Obj     = await startReq.json () ;//Convert to json
            for(let i = 0 ; i < Obj.length ; i ++){

            const row = document.createElement('tr');
            table.appendChild(row);
            
            const cell1 = document.createElement('td');
            row.appendChild(cell1);
            
            const cell2 = document.createElement('td');
            row.appendChild(cell2);
    
            const cell3 = document.createElement('td');
            row.appendChild(cell3);
    
            const cell4 = document.createElement('td');
            row.appendChild(cell4);
    
            const cell5 = document.createElement('td');
            row.appendChild(cell5);

            
            const cell6 = document.createElement('td');
            row.appendChild(cell6);

            
            const cell7 = document.createElement('td');
            row.appendChild(cell7);


            const img = document.createElement('img');
            cell7.appendChild(img);
    
            cell1.textContent = Obj[i].id;
            cell2.textContent = Obj[i].title;
            cell3.textContent = Obj[i].category;
            cell4.textContent = Obj[i].description;
            cell5.textContent = Obj[i].rating.count + " "+ Obj[i].rating.rate;
            
            cell6.textContent = Obj[i].price;
            img.src = Obj[i].image;
            img.style.width = "50px";
        }
        }
asFun();