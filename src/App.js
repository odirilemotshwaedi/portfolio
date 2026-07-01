//import "./App.css";
import React from "react";
//import {useState } from "react";
//import { cloneElement } from "react";
import './App.css'; 


const Button = ({ children, ...rest }) => (
  <button onClick={() => console.log("ButtonClick")} {...rest}>
    {children}
  </button>
);

const withClick = (Component) => {
  const handleClick = () => {
    console.log("WithClick");
  };

  return(props) => {
    return<Component {...props} onClick={handleClick} />;
  };
};



const MyButton = withClick(Button);

export default function App() {
  return <button onClick={React.useEffect(()=> {
 console.log('The value of the toggle variable is', toggle)
})}>Submit</button>;
}




/*
const socials = [
  {
    //icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    //icon: faGithub,
    url: "https://github.com",
  },
  {
   // icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
   // icon: faMedium,
    url: "https://medium.com",
  },
  {
    //icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];


useEffect(({socials})=>{
  return socials.url
})






const Row = ({ children, spacing }) => {
  const childStyle = {
    marginLeft: `${spacing}px`,
  };

  return(
    <div className="Row">
      {React.Children.map(children, (child, index) => {
        child.props.style = {
          ...child.props.style,
          ...(index > 0 ? childStyle : {}),
        };
        
        return child;
      })}
    </div>
  );
};

export default function App(){
  return (
    <Row children={"Walk"} spacing={15}></Row>
  )
}


``````````````````````````````````````````````````````````` 
const Button = ({ children, ...rest }) => (
  <button onClick={() => console.log("ButtonClick")} {...rest}>
    {children}
  </button>
);

const withClick = (Component) => {
  const handleClick = () => {
    console.log("WithClick");
  };

  return (props) => {
    return <Component onClick={handleClick} {...props} />;
  };
};

const MyButton = withClick(Button);

export default function App() {
  return (
    <Button 
      children={"Buttoned"},
      
  
    >Submit</Button>;
  )
}






  ``````````````````````````````````````````````````````````````````
const MousePosition = ({ render }) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMousePositionChange = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMousePositionChange);

    return () => {
      window.removeEventListener("mousemove", handleMousePositionChange);
    };
  }, []);

  return render({ mousePosition });
};

const PanelMouseLogger = () => {
  return (
    <div className="BasicTracker">
      <p>Mouse position:</p>
      <MousePosition
        render={({ mousePosition }) => (
          <div className="Row">
            <span>x: {mousePosition.x}</span>
            <span>y: {mousePosition.y}</span>
          </div>
        )}
      />
    </div>
  );
};

const PointMouseLogger = () => {
  return (
    <MousePosition
      render={({ mousePosition }) => (
        <p>
          ({mousePosition.x}, {mousePosition.y})
        </p>
      )}
    />
  );
};

function App() {
  return (
    <div className="App">
      <header className="Header">Little Lemon Restaurant 🍕</header>
      <PanelMouseLogger />
      <PointMouseLogger />
    </div>
  );
}

export default App;*/