import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ContactIcons = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      className="px-10 py-32"
    >
      <div className="flex sm:justify-center sm:flex-row flex-col flex-wrap gap-20">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 flex justify-center items-center rounded-full bg-[#d17a29]">
              <img src="/Home/Hero/location.svg" className="h-7" />
            </div>
            <div>
              <h5 className="m-0 mb-1">Visit Us</h5>
              <p className="m-0 text-xs">
                Village Dholai, opposite Vijay Path, <br />
                Mansarovar, Jaipur, Rajasthan 302020
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 flex justify-center items-center rounded-full bg-[#d17a29]">
              <img src="/Contact/call.svg" className="h-9" />
            </div>
            <div>
              <h5 className="m-0 mb-1">Call Us</h5>
              <p className="m-0 text-sm">+91 9649689649</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
          transition={{ duration: 1.1 }}
        >
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 flex justify-center items-center rounded-full bg-[#d17a29]">
              <img src="/Contact/class.svg" className="h-8" />
            </div>
            <div>
              <h5 className="m-0 mb-1">Gita Classes</h5>
              <p className="m-0 text-xs">
                <b>Youth:</b> +91 6378588289
              </p>
              <p className="m-0 text-xs">
                <b>Elders & Kids:</b> +91 9649689649
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactIcons;
