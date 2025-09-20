import './Research.css'

// function Research(){
//     return(
//         <div>
//             <h1>Research</h1>
//             <p>All research-related content will go here.</p>
//             {/* Example cards */}
//             <section className="grid md:grid-cols-2 gap-6 mt-10">
//                 <article className="border rounded-xl p-6 shadow hover:shadow-lg transition">
//                 <h2 className="text-2xl font-semibold mb-2">Project A</h2>
//                 <p>Brief description about the research topic.</p>
//                 </article>

//                 <article className="border rounded-xl p-6 shadow hover:shadow-lg transition">
//                 <h2 className="text-2xl font-semibold mb-2">Project B</h2>
//                 <p>Another ongoing research description.</p>
//                 </article>
//             </section>
//         </div>
        
//     )
// }

import React from "react";
import "./Research.css";

const researchData = [
  {
    title: "Machine Learning",
    desc: "Advanced algorithms for pattern recognition, predictive modeling, and intelligent decision-making systems.",
    tags: ["Neural Networks", "Ensemble Methods", "Feature Engineering", "Model Optimization"],
    icon: "/assets/icons/ml.png", // 👉 replace with real path
  },
  {
    title: "Deep Learning",
    desc: "Deep neural network architectures for complex problem solving and cognitive computing applications.",
    tags: ["CNNs", "RNNs", "Transformers", "GANs", "Computer Vision", "NLP"],
    icon: "/assets/icons/dl.png",
  },
  {
    title: "IoT & Edge Computing",
    desc: "Distributed computing at the network edge, enabling real-time processing and reduced latency.",
    tags: ["Edge AI", "Fog Computing", "Smart Sensors", "Industrial IoT"],
    icon: "/assets/icons/iot.png",
  },
  {
    title: "Cybersecurity",
    desc: "Protecting data, networks, and systems through cutting-edge security techniques and frameworks.",
    tags: ["Network Security", "Cryptography", "Threat Intelligence", "Zero Trust"],
    icon: "/assets/icons/cyber.png",
  },
  {
    title: "High-Performance Computing",
    desc: "Leveraging supercomputing and parallel architectures for data-intensive scientific applications.",
    tags: ["MPI", "OpenMP", "GPU Acceleration", "Cluster Computing"],
    icon: "/assets/icons/hpc.png",
  },
];

const Research = () => {
  return (
    <div className="research-container">
      <header className="research-header">
        <h1>Our Research Areas</h1>
        <p>
          Exploring cutting-edge technologies that shape the future of computing and networking.
        </p>
      </header>

      <div className="research-grid">
        {researchData.map((item, index) => (
          <div key={index} className="research-card">
            <div className="icon-wrapper">
              <img src={item.icon} alt={item.title} />
            </div>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <div className="tags">
              {item.tags.map((tag, i) => (
                <span key={i} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Research;



// export default Research;