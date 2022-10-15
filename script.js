let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

            const output = document.querySelector('.output');
            output.innerHTML = '';
            
                for (let i = 1; i <= answer; i++) {
                    const para = document.createElement('p');
                    if (i % 3 === 0 && i % 5 === 0) {
                        para.textContent = `FizzBuzz`;
                        console.log("FizzBuzz");
                    } else if (i % 3 === 0) {
                        para.textContent = 'Fizz';
                        console.log("Fizz");
                    } else if (i % 5 === 0) {
                        para.textContent = 'Buzz';
                        console.log("Buzz");
                    } else {
                        para.textContent = i;
                        console.log(i);
                    }

                    output.appendChild(para);

                }