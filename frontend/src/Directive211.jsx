import React from "react";
import { useState, useEffect } from "react";

function Directive211() {

    const [ directive111Ids, setDirective111Ids ] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/111')
        .then((resp) => resp.json())
        .then((data) => {
            const ids = data.map(item => item.id);
            setDirective111Ids(ids);
        })
      }, []);

    // function handleSubmit(event) {
    //     event.preventDefault();
    //     fetch('http://localhost:3000/111lists', {
    //         method: 'POST',
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Accept": "application/json"
    //         },
    //         body: JSON.stringify({
    //             id: '', 
    //             newList111  })
    //     })
    //     .then((resp) => resp.json())
    //     .then(data => console.log(data))
    // };

    async function handleSubmit(event) {
        event.preventDefault();
        for (let i = 0; i < newList111.length; i++) {
            const response = await fetch('http://localhost:3000/111-lists', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: '',
                    list: newList111[i]
                })
            });
          if (response.ok) {
            console.log(`Subarray ${i+1} submitted successfully.`);
          } else {
            console.error(`Failed to submit subarray ${i+1}. Status: ${response.status}`);
          }
        }
      }

      function randomGroupSplit(items) {
        const shuffleArray = (array) => {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        };
        const shuffledItems = shuffleArray([...items]);
        const groups = [];
        for (let i = 0; i < shuffledItems.length; i += 4) {
            groups.push(shuffledItems.slice(i, i + 4));
        }
        return groups;
      }
      const newList111 = randomGroupSplit(directive111Ids, 4);

      const [ directive111List, setDirective111List ] = useState([]);
      useEffect(() => {
          fetch('http://localhost:3000/111-lists')
          .then((resp) => resp.json())
          .then((data) => {
              const lists = data.map(item => item);
              setDirective111List(lists);
          })
        }, []);

        console.log(directive111List)
        directive111List
        const randomSuit = suits[Math.floor(Math.random() * suits.length)];



    // function randomGroupSplit(items, groupSize) {
    //     const shuffleArray = (array) => {
    //       for (let i = array.length - 1; i > 0; i--) {
    //         const j = Math.floor(Math.random() * (i + 1));
    //         [array[i], array[j]] = [array[j], array[i]];
    //       }
    //       return array;
    //     };
    //     const shuffledItems = shuffleArray([...items]);
    //     const groups = [];
    //     for (let i = 0; i < shuffledItems.length; i += groupSize) {
    //       groups.push({ list: shuffledItems.slice(i, i + groupSize)});
    //     }
    //     return groups;
    //   }
      

    return (
        <>
            <p>Empty</p>
            <form onSubmit={handleSubmit}>
                <input id="submit" type="submit" value="Submit List Generator"/>
            </form>
        </>
    )
};

export default Directive211;