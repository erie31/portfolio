import { useEffect,useRef, useState } from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { gsap } from "gsap";
import './preloader.scss';

function LinearProgressWithLabel(props) {
    const el = useRef();
    const tl = useRef();
    const q = gsap.utils.selector(el);

    useEffect(() => {
        tl.current = gsap.timeline()
      .from(q(".square"), {
        opacity: .7
      })
      .to(q(".square"), {
        duration: 1.5, ease: "powerInOut", opacity: 1, repeat: -1, yoyo: true
      });
      }, []);
  return (
    <div className="preload">
        <div className="log">
        
           <p ref={el}>Loading: <span className="square"><i>{`Greenmood${window.location.pathname}`}</i></span></p>
        </div>
      <div className="loader">
        <LinearProgress variant="determinate" {...props} />
      </div>
      <div className="progress">
        <Typography variant="body2" color="">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </div>
    </div>
  );
}

LinearProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

export default function LinearWithValueLabel() {
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
    },100);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box>
      <LinearProgressWithLabel value={progress} />
    </Box>
  );
}
