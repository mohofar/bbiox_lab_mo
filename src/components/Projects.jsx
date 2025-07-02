import React from "react";

export default function Projects() {
  return (
    <main>
      <div className="container">
        <div className="section">
          <h2 className="h1">Research Projects</h2>
          {/* Add project cards and sections here, using the new theme's card and grid classes. */}
          <div className="project-list">
            {/* Example project card */}
            <div className="project-card card-pro">
              <h3>Bone Shape and Skeletal Disorders</h3>
              <p>Understanding the relationship between bone morphology and skeletal disorders is essential for early diagnosis, prevention, and the development of effective treatments and implant solutions. In this research line, we explore how variations in bone shape influence disease development, progression, and clinical outcomes.</p>
              <p>Our work ranges from developing implant design pipelines -using techniques such as statistical shape modeling and deep learning-to creating and evaluating (custom) implants for anatomical structures like the mandible and lunate. We also use computational modeling and experimental approaches to assess the (mechanical) performance of these designs. In parallel, we investigate how anatomical differences and implant shape variations affect functional outcomes, with the goal of supporting more effective, patient-specific implant design and surgical planning.</p>
            </div>
            {/* Add more project cards as needed */}
          </div>
        </div>
      </div>
    </main>
  );
} 