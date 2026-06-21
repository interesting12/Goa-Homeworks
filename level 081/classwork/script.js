function cube (){
    document.getElementById(cube).innerHTML = `<style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden; 
        }

        
        .cube {
            position: absolute;
            top: 0;
            left: 0;
            width: 50px;
            height: 50px;
            background-color: #3498db;
            animation: moveCube 8s linear infinite;
        }
        @keyframes moveCube {
            0% { top: 0; left: 0; }                   
            25% { top: 0; left: calc(100vw - 50px); }
            50% { top: calc(100vh - 50px); left: calc(100vw - 50px); }
            75% { top: calc(100vh - 50px); left: 0; }
            100% { top: 0; left: 0; }              
        }
    </style>`
}