document.addEventListener('DOMContentLoaded', function() {
    const svgObject = document.getElementById('building-project');
    svgObject.addEventListener('load', function() {
        const svgDoc = svgObject.contentDocument;
        const regions = svgDoc.querySelectorAll('path'); 
        const infoBox = document.getElementById('info');
        const infoImg = document.getElementById('info-img');
        const infoTitle = document.getElementById('info-title');
        const infoDescription = document.getElementById('info-description');

        const regionData = {
            "1": {
                title: "Asosiy Yo'l",
                description: "Transport vositalari uchun yo'l",
                imgSrc: "https://t3.ftcdn.net/jpg/00/81/26/82/360_F_81268225_eVHynMTlVQf3wVdYOoUEz8d8KolhVZm0.jpg"
            },
            
            "2": {
                title: "Asosiy Yo'l",
                description: "Transport vositalari uchun yo'l",
                imgSrc: "https://t3.ftcdn.net/jpg/00/81/26/82/360_F_81268225_eVHynMTlVQf3wVdYOoUEz8d8KolhVZm0.jpg"
            },
            "3": {
                title: "",
                description: "",
                imgSrc: ""
            },
            
            "4": {
                title: "Garden",
                description: "yashil bog' qismi",
                imgSrc: "https://images.squarespace-cdn.com/content/v1/59cb502e1f318dc50f160957/94a8f929-5013-45d1-bc21-ca8ef3dda873/beautiful-gardens-in-the-world.jpg"
            },
            "5": {
                title: "",
                description: "",
                imgSrc: ""
            },
            
            "6": {
                title: "",
                description: "",
                imgSrc: ""
            },
            "7": {
                title: "",
                description: "",
                imgSrc: ""
            },
            
            "8": {
                title: "",
                description: "",
                imgSrc: ""
            },
            "9": {
                title: "Garden",
                description: "yashil bog' qismi",
                imgSrc: "https://images.squarespace-cdn.com/content/v1/59cb502e1f318dc50f160957/94a8f929-5013-45d1-bc21-ca8ef3dda873/beautiful-gardens-in-the-world.jpg"
            },
            
            "10": {
                title: "Garden",
                description: "yashil bog' qismi",
                imgSrc: "https://images.squarespace-cdn.com/content/v1/59cb502e1f318dc50f160957/94a8f929-5013-45d1-bc21-ca8ef3dda873/beautiful-gardens-in-the-world.jpg"
            },
            "11": {
                title: "",
                description: "",
                imgSrc: ""
            },
            
            "12": {
                title: "Garden",
                description: "yashil bog' qismi",
                imgSrc: "https://images.squarespace-cdn.com/content/v1/59cb502e1f318dc50f160957/94a8f929-5013-45d1-bc21-ca8ef3dda873/beautiful-gardens-in-the-world.jpg"
            },
            "13": {
                title: "",
                description: "",
                imgSrc: ""
            },
            
            "14": {
                title: "",
                description: "",
                imgSrc: ""
            },
            "15": {
                title: "",
                description: "",
                imgSrc: ""
            },
            
            "16": {
                title: "",
                description: "",
                imgSrc: ""
            },
            "17": {
                title: "",
                description: "",
                imgSrc: ""
            },
            
            "18": {
                title: "",
                description: "",
                imgSrc: ""
            },
            "19": {
                title: "Bino tom qismi1",
                description: "havfsizlik uchun",
                imgSrc: "https://www.andstat.uz/images/110320242.jpg"
            },
            
            "20": {
                title: "Bino tom qismi1",
                description: "havfsizlik uchun",
                imgSrc: "https://www.andstat.uz/images/110320242.jpg"
            },
            "21": {
                title: "Bino tom qismi2",
                description: "havfsizlik uchun",
                imgSrc: "https://www.andstat.uz/images/110320242.jpg"
            },
            
            "22": {
                title: "",
                description: "",
                imgSrc: ""
            },
            "23": {
                title: "Bino tom qismi2",
                description: "havfsizlik uchun",
                imgSrc: "https://www.andstat.uz/images/110320242.jpg"
            },
            
            "24": {
                title: "Bino tom qismi2",
                description: "havfsizlik uchun",
                imgSrc: "https://www.andstat.uz/images/110320242.jpg"
            },
            "25": {
                title: "Bino tom qismi2",
                description: "havfsizlik uchun",
                imgSrc: "https://www.andstat.uz/images/110320242.jpg"
            },
            
            "26": {
                title: "Bino tom qismi3",
                description: "havfsizlik uchun",
                imgSrc: "https://www.andstat.uz/images/110320242.jpg"
            },
            "27": {
                title: "Bino tom qismi3",
                description: "havfsizlik uchun",
                imgSrc: "https://www.andstat.uz/images/110320242.jpg"
            },
            "28": {
                title: "Bino tom qismi3",
                description: "havfsizlik uchun",
                imgSrc: "https://www.andstat.uz/images/110320242.jpg"
            },
            
            "29": {
                title: "Bino tom qismi3",
                description: "havfsizlik uchun",
                imgSrc: "https://www.andstat.uz/images/110320242.jpg"
            },
            "30": {
                title: "Bino tom qismi3",
                description: "havfsizlik uchun",
                imgSrc: "https://www.andstat.uz/images/110320242.jpg"
            },
            
            "31": {
                title: "",
                description: "",
                imgSrc: ""
            },
            "32": {
                title: "Favvora",
                description: "Ko'ngil ochar suv harakatlari",
                imgSrc: "https://www.yoshlarovozi.uz/uploads/news/78464448019934aaae876811428cb381.jpg"
            },
            
            "33": {
                title: "",
                description: "",
                imgSrc: ""
            },
            "34": {
                title: "Daraxt1",
                description: "Havoni tozalaydi",
                imgSrc: "https://tushlar-tabiri.uz/wp-content/uploads/2019/10/daraxt-1-2.jpg"
            },
            
            "35": {
                title: "",
                description: "",
                imgSrc: ""
            },
            "36": {
                title: "Daraxt2",
                description: "Havoni tozalaydi",
              imgSrc: "https://tushlar-tabiri.uz/wp-content/uploads/2019/10/daraxt-1-2.jpg"
            },
            
            "37": {
                title: "",
                description: "",
                imgSrc: ""
            },
            "38": {
                title: "Daraxt3",
                description: "Havoni tozalaydi",
                imgSrc: "https://tushlar-tabiri.uz/wp-content/uploads/2019/10/daraxt-1-2.jpg"
            },
            
            "39": {
                title: "",
                description: "",
                imgSrc: ""
            },
            "40": {
                title: "Daraxt4",
                description: "Havoni tozalaydi",
               imgSrc: "https://tushlar-tabiri.uz/wp-content/uploads/2019/10/daraxt-1-2.jpg"
            },
            
            "41": {
                title: "",
                description: "",
                imgSrc: ""
            },
            "42": {
                title: "Daraxt5",
                description: "Havoni tozalaydi",
               imgSrc: "https://tushlar-tabiri.uz/wp-content/uploads/2019/10/daraxt-1-2.jpg"
            },
            
            "43": {
                title: "",
                description: "",
                imgSrc: ""
            },
            "44": {
                title: "Daraxt6",
                description: "Havoni tozalaydi",
               imgSrc: "https://tushlar-tabiri.uz/wp-content/uploads/2019/10/daraxt-1-2.jpg"
            },
            "45": {
                title: "",
                description: "",
                imgSrc: ""
            },
            
            "46": {
                title: "Daraxt7",
                description: "Havoni tozalaydi",
                imgSrc: "https://tushlar-tabiri.uz/wp-content/uploads/2019/10/daraxt-1-2.jpg"
            },
            "47": {
                title: "",
                description: "",
                imgSrc: ""
            },
            
            "48": {
                title: "Daraxt8",
                description: "Havoni tozalaydi",
                imgSrc: "https://tushlar-tabiri.uz/wp-content/uploads/2019/10/daraxt-1-2.jpg"
            },
            "49": {
                title: "",
                description: "",
                imgSrc: ""
            },
            
            "50": {
                title: "Daraxt10",
                description: "Havoni tozalaydi",
             imgSrc: "https://tushlar-tabiri.uz/wp-content/uploads/2019/10/daraxt-1-2.jpg"
            },
            "51": {
                title: "",
                description: "",
                imgSrc: ""
            },
            
            "52": {
                title: "Daraxt11",
                description: "Havoni tozalaydi",
               imgSrc: "https://tushlar-tabiri.uz/wp-content/uploads/2019/10/daraxt-1-2.jpg"
            },
            "53": {
                title: "",
                description: "",
                imgSrc: ""
            },
            
            "54": {
                title: "Daraxt12",
                description: "Havoni tozalaydi",
                imgSrc: "https://tushlar-tabiri.uz/wp-content/uploads/2019/10/daraxt-1-2.jpg"
            },
            "55": {
                title: "",
                description: "",
                imgSrc: ""
            },
            
            "56": {
                title: "Daraxt13",
                description: "Havoni tozalaydi",
                imgSrc: "https://tushlar-tabiri.uz/wp-content/uploads/2019/10/daraxt-1-2.jpg"
            },
            "57": {
                title: "",
                description: "",
                imgSrc: ""
            },
            
            "58": {
                title: "Daraxt14",
                description: "Havoni tozalaydi",
               imgSrc: "https://tushlar-tabiri.uz/wp-content/uploads/2019/10/daraxt-1-2.jpg"
            },
            "59": {
                title: "",
                description: "",
                imgSrc: ""
            },
            
            "60": {
                title: "Daraxt15",
                description: "Havoni tozalaydi",
                imgSrc: "https://tushlar-tabiri.uz/wp-content/uploads/2019/10/daraxt-1-2.jpg"
            },
            "61": {
                title: "",
                description: "",
                imgSrc: ""
            },
            "62": {
                title: "Daraxt16",
                description: "Havoni tozalaydi",
              imgSrc: "https://tushlar-tabiri.uz/wp-content/uploads/2019/10/daraxt-1-2.jpg"
            },
            
            "63": {
                title: "",
                description: "",
                imgSrc: ""
            },
            "64": {
                title: "Daraxt17",
                description: "Havoni tozalaydi",
               imgSrc: "https://tushlar-tabiri.uz/wp-content/uploads/2019/10/daraxt-1-2.jpg"
            },
            
            "65": {
                title: "",
                description: "",
                imgSrc: ""
            },
            "66": {
                title: "Daraxt18",
                description: "Havoni tozalaydi",
               imgSrc: "https://tushlar-tabiri.uz/wp-content/uploads/2019/10/daraxt-1-2.jpg"
            },
            
            "67": {
                title: "",
                description: "",
                imgSrc: ""
            },
            "68": {
                title: "Daraxt19",
                description: "Havoni tozalaydi",
                imgSrc: "https://tushlar-tabiri.uz/wp-content/uploads/2019/10/daraxt-1-2.jpg"
            },
            
            "69": {
                title: "",
                description: "",
                imgSrc: ""
            },
            "70": {
                title: "Daraxt20",
                description: "Havoni tozalaydi",
               imgSrc: "https://tushlar-tabiri.uz/wp-content/uploads/2019/10/daraxt-1-2.jpg"
            },
            
            "71": {
                title: "",
                description: "",
                imgSrc: ""
            },
            "72": {
                title: "Daraxt21",
                description: "Havoni tozalaydi",
                imgSrc: "https://tushlar-tabiri.uz/wp-content/uploads/2019/10/daraxt-1-2.jpg"
            },
            
            "73": {
                title: "",
                description: "",
                imgSrc: ""
            },
            "74": {
                title: "Daraxt9",
                description: "Havoni tozalaydi",
                imgSrc: "https://tushlar-tabiri.uz/wp-content/uploads/2019/10/daraxt-1-2.jpg"
            },
            
            "75": {
                title: "",
                description: "",
                imgSrc: ""
            }

        };

        regions.forEach(region => {
            const regionName = region.getAttribute('data-name');
            
            region.addEventListener('mouseover', function(event) {
                const data = regionData[regionName] || { title: "Ma'lumot mavjud emas", description: "", imgSrc: "" };
                infoTitle.textContent = data.title;
                infoDescription.textContent = data.description;
                infoImg.src = data.imgSrc;
                infoImg.style.display = data.imgSrc ? "block" : "none";

                infoBox.style.display = "block";
                infoBox.style.top = event.pageY + "px";
                infoBox.style.left = event.pageX + "px";

                region.style.fill = '#3498db';
                region.style.transform = 'scale(1.05)';
                region.style.transition = 'transform 0.3s ease, fill 0.3s ease';
            });

            region.addEventListener('mousemove', function(event) {
                infoBox.style.top = event.pageY + 10 + "px";
                infoBox.style.left = event.pageX + 10 + "px";
            });

            region.addEventListener('mouseout', function() {
                infoBox.style.display = "none";
                region.style.fill = '';
                region.style.transform = '';
            });
        });
    });
});
