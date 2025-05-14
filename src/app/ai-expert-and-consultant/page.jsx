import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <>
      {/* ----------- Page Banner --------- */}
      <section
        className="breadcrumb-area custom-breadcrumb bg-green bg-cover"
        style={{
          backgroundImage: `url('/img/about-banner.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
        }}
      >
        <div className="container">
          <div className="breadcrumb-item">
            <div className="row">
              <div className="col-lg-8 ">
                <nav className="woocommerce-breadcrumb" aria-label="Breadcrumb">
                  <Link href="/">Home</Link> / AI Expert and Consultant
                </nav>
                <h1 className="breadcumb-title">AI Expert and Consultant</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="career-detail section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3>About the Role</h3>
              <p>
                We are seeking an experienced AI Expert and Consultant to join
                our National Large Language Model (LLM) Project, replacing
                ChatGPT usage in the workplace. As a key technical advisor, you
                will provide expertise across the full LLM stack, from model
                training and fine-tuning to deployment and RAG implementation.
              </p>
              <div className="career-list">
                <h3>Key Responsibilities:</h3>
                <ul>
                  <li>
                    Provide strategic guidance and technical oversight for the
                    development of Arabic LLM initiative
                  </li>
                  <li>
                    Evaluate and select appropriate base models (7B and 30B
                    parameter models) based on benchmarking performance for
                    Arabic language tasks
                  </li>
                  <li>
                    Design data acquisition strategies and processing pipelines
                    for Arabic language data, including Omani dialect-specific
                    data
                  </li>
                  <li>
                    Lead continuous pre-training, supervised fine-tuning, RLHF
                    and DPO implementation processes
                  </li>
                  <li>
                    Design and implement comprehensive evaluation frameworks for
                    LLM assessment across diverse Arabic tasks
                  </li>
                  <li>
                    Establish benchmarking methodologies aligned with
                    international standards
                  </li>
                  <li>
                    Coordinate model submissions to relevant leaderboards to
                    demonstrate comparative performance
                  </li>
                  <li>
                    Architect efficient tokenization approaches optimized for
                    Arabic language to improve token fertility
                  </li>
                  <li>
                    Develop RAG (Retrieval Augmented Generation) frameworks for
                    government document search and integration
                  </li>
                  <li>
                    Consult on model optimization techniques for efficient
                    inference, including quantization strategies and knowledge
                    distillation
                  </li>
                  <li>
                    Implement model compression techniques to create efficient
                    student models for deployment
                  </li>
                  <li>
                    Lead the design of model guardrails that align with Omani
                    cultural values and governmental requirements
                  </li>
                  <li>
                    Advise on infrastructure requirements for model training,
                    fine-tuning, and deployment
                  </li>
                  <li>
                    Collaborate with AWS/Cohere/other vendor teams to implement
                    the technical solution
                  </li>
                  <li>
                    Conduct knowledge transfer sessions to build local AI
                    capabilities
                  </li>
                  <li>
                    Guide the development of metrics and monitoring frameworks
                    for model performance
                  </li>
                  <li>
                    Implement and manage data annotation pipelines and quality
                    assurance processes
                  </li>
                </ul>
              </div>
              <div className="career-list">
                <h3>Requirements:</h3>

                <ul>
                  <li>
                    Degree(s) in Computer Science, AI, Machine Learning, or a
                    related field
                  </li>
                  <li>
                    5+ years of experience in LLM and deep learning, with
                    specific expertise in transformer-based language models
                  </li>
                  <li>
                    Hands-on experience with full-cycle LLM development,
                    including pre-training, fine-tuning, and deployment
                  </li>
                  <li>
                    Demonstrated expertise in Arabic NLP, particularly
                    tokenization approaches and language-specific optimization
                  </li>
                  <li>
                    Extensive experience with LLM evaluation methodologies,
                    including automatic metrics and human evaluation protocols
                  </li>
                  <li>
                    Proficiency in designing, implementing, and analyzing
                    benchmark suites for language models
                  </li>
                  <li>
                    Experience with leaderboard submission processes and
                    performance verification
                  </li>
                  <li>
                    Experience with RLHF (Reinforcement Learning from Human
                    Feedback) and DPO (Direct Preference Optimization)
                    techniques
                  </li>
                  <li>
                    Strong knowledge of model quantization techniques (INT8,
                    INT4, GPTQ, AWQ, etc.) and their impact on model performance
                  </li>
                  <li>
                    Deep expertise in knowledge distillation methods for
                    creating smaller, efficient student models from larger
                    teacher models
                  </li>
                  <li>
                    Practical knowledge of efficient model inference strategies
                    and optimization techniques
                  </li>
                  <li>
                    Deep understanding of RAG systems and information retrieval
                  </li>
                  <li>
                    Proficiency in PyTorch, TensorFlow, or JAX for LLM
                    development
                  </li>
                  <li>
                    Strong understanding of distributed training systems and GPU
                    optimization
                  </li>
                  <li>
                    Experience with containerization (Docker) and orchestration
                    (Kubernetes) for ML workloads
                  </li>
                  <li>
                    Knowledge of responsible AI practices and guardrail
                    implementation
                  </li>
                  <li>
                    Experience working with government or enterprise LLM
                    deployments
                  </li>
                  <li>
                    Proficiency with Scale AI SGP (Synthetic Generation
                    Platform) or similar tools for data generation and model
                    evaluation
                  </li>
                  <li>
                    Experience with data annotation platforms and human feedback
                    collection systems
                  </li>
                  <li>
                    Leadership skills with ability to guide technical teams and
                    communicate with stakeholders
                  </li>
                </ul>
              </div>
              <div className="career-list">
                <h3>Preferred Qualifications:</h3>
                <ul>
                  <li>
                    Previous experience with Arabic-specific language models
                    like Jais or similar
                  </li>
                  <li>
                    Experience with AWS cloud services, particularly SageMaker,
                    HyperPod, Trainium, and other AI/ML infrastructure
                  </li>
                  <li>
                    Previous work with model customization and adaptation for
                    specific languages or domains
                  </li>
                  <li>
                    Understanding of data privacy considerations for government
                    applications
                  </li>
                  <li>
                    Experience implementing token efficiency strategies for
                    non-English languages
                  </li>
                  <li>
                    Knowledge of MLOps practices for LLM lifecycle management
                  </li>
                  <li>
                    Experience with post-training optimization techniques like
                    pruning, weight sharing, and structured sparsity
                  </li>
                  <li>
                    Demonstrated ability to communicate complex technical
                    concepts to non-technical stakeholders
                  </li>
                  <li>
                    Experience with Scale AI's Human Feedback and AI Evaluation
                    tools
                  </li>
                  <li>
                    Familiarity with other data annotation and synthetic data
                    generation platforms (Snorkel, Humanloop, etc.)
                  </li>
                  <li>
                    Experience building custom evaluation harnesses for LLM
                    performance assessment
                  </li>
                  <li>
                    Demonstrated success in optimizing models for
                    resource-constrained environments
                  </li>
                  <li>
                    Experience with holistic LLM valuation methodologies that
                    assess both performance and business impact
                  </li>
                  <li>
                    Familiarity with public LLM benchmarks and Arabic-specific
                    evaluation suites
                  </li>
                  <li>
                    Experience benchmarking models against commercial offerings
                    (OpenAI, Claude, etc.)
                  </li>
                </ul>
              </div>

              <div className="job-footer mt-4">
                <Link
                  className="default-btn"
                  href="https://forms.gle/ChmGTxayAymBFwoB9"
                  target="_blank"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default page;
