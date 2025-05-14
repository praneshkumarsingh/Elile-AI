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
                  <Link href="/">Home</Link> / AI Quality Engineer
                </nav>
                <h1 className="breadcumb-title">AI Quality Engineer</h1>
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
                We are seeking a highly skilled AI Quality Engineer to join our
                National Large Language Model (LLM) Project. This key role will
                focus on establishing and implementing robust data quality
                frameworks, evaluation methodologies, and quality gates
                throughout the LLM development lifecycle. The ideal candidate
                will ensure our Arabic LLM meets the highest standards of
                performance, reliability, and cultural appropriateness before
                being deployed to 20,000 government employees.
              </p>
              <div className="career-list">
                <h3>Key Responsibilities:</h3>

                <ul>
                  <li>
                    Design and implement comprehensive data quality frameworks
                    specific to Arabic language datasets for LLM training and
                    evaluation
                  </li>
                  <li>
                    Establish and enforce quality gates at each project phase
                    (data preparation, model training, evaluation, and RAG
                    implementation)
                  </li>
                  <li>
                    Develop detailed acceptance criteria for each phase gate
                    requiring formal sign-off from key stakeholders
                  </li>
                  <li>
                    Create and implement quality metrics for data annotation,
                    achieving &gt;90% inter-annotator agreement and &gt;95%
                    cultural/contextual accuracy
                  </li>
                  <li>
                    Design and maintain data pipeline quality assurance
                    processes for Arabic text normalization, diacritics
                    standardization, and dialect variation mapping
                  </li>
                  <li>
                    Implement Arabic-specific tokenization optimization with
                    &gt;98% vocabulary coverage and &gt;95% morphological
                    accuracy
                  </li>
                  <li>
                    Develop comprehensive RAG quality measurement frameworks
                    covering both retrieval metrics
                  </li>
                  <li>
                    Establish automated monitoring systems for continuous
                    quality assessment with real-time dashboards
                  </li>
                  <li>
                    Create and enforce testing protocols for model evaluation
                    across various Arabic language tasks
                  </li>
                  <li>
                    Implement robust regression testing frameworks to ensure
                    model updates maintain or improve quality metrics
                  </li>
                  <li>
                    Develop protocols for bias detection and mitigation in both
                    training data and model outputs
                  </li>
                  <li>
                    Support the implementation of benchmarking against global
                    standards
                  </li>
                  <li>
                    Design human evaluation frameworks to assess model outputs
                    qualitatively
                  </li>
                  <li>
                    Collaborate with data annotation teams to ensure
                    high-quality ground truth data
                  </li>
                  <li>
                    Participate in weekly quality committee meetings and
                    bi-weekly RAG performance reviews
                  </li>
                  <li>
                    Create and maintain quality documentation including
                    processes, guidelines, and acceptance criteria
                  </li>
                </ul>
              </div>
              <div className="career-list">
                <h3>Requirements:</h3>

                <ul>
                  <li>
                    Bachelor's or Master's degree in Computer Science, AI,
                    Machine Learning, or related field
                  </li>
                  <li>
                    4+ years of experience in AI/ML quality assurance, with
                    specific focus on natural language processing
                  </li>
                  <li>
                    Strong understanding of LLM evaluation methodologies and
                    benchmarking techniques
                  </li>
                  <li>
                    Experience establishing quality gates and acceptance
                    criteria for AI systems
                  </li>
                  <li>
                    Hands-on experience with data quality frameworks and
                    validation techniques
                  </li>
                  <li>
                    Experience implementing multi-level annotation review
                    processes with clear metrics
                  </li>
                  <li>
                    Proficiency in designing data pipeline quality assurance
                    systems for Arabic language processing
                  </li>
                  <li>
                    Experience with RAG quality assessment covering both
                    retrieval and generation components
                  </li>
                  <li>
                    Ability to establish and track performance metrics against
                    benchmarks
                  </li>
                  <li>
                    Experience implementing automated testing frameworks and
                    continuous integration for ML systems
                  </li>
                  <li>
                    Strong knowledge of bias detection and fairness assessment
                    in AI systems
                  </li>
                  <li>
                    Familiarity with Arabic language and NLP challenges specific
                    to Semitic languages
                  </li>
                  <li>
                    Experience with human evaluation protocols and annotation
                    quality assessment
                  </li>
                  <li>
                    Proficiency in Python and relevant testing/quality assurance
                    libraries
                  </li>
                  <li>
                    Understanding of statistical analysis techniques for model
                    evaluation
                  </li>
                  <li>
                    Experience with data annotation platforms and quality
                    control mechanisms
                  </li>
                  <li>
                    Knowledge of responsible AI practices and ethical
                    considerations
                  </li>
                </ul>
              </div>
              <div className="career-list">
                <h3>Preferred Qualifications:</h3>
                <ul>
                  <li>
                    Experience with LLM evaluation specifically for government
                    or enterprise applications
                  </li>
                  <li>Knowledge of Arabic-specific LLM benchmarks</li>
                  <li>
                    Experience with RAG system evaluation and quality assurance
                  </li>
                  <li>
                    Familiarity with platforms like Scale AI, Humanloop, or
                    other annotation/evaluation systems
                  </li>
                  <li>
                    Experience with hallucination detection and factual
                    consistency verification
                  </li>
                  <li>
                    Knowledge of prompt engineering and prompt quality
                    assessment
                  </li>
                  <li>
                    Experience with MLOps and quality gates in CI/CD pipelines
                    for ML
                  </li>
                  <li>
                    Proficiency with data lineage tracking and documentation
                  </li>
                  <li>
                    Experience implementing A/B testing frameworks for model
                    comparison
                  </li>
                  <li>
                    Familiarity with user experience testing for AI applications
                  </li>
                  <li>
                    Experience with security and privacy testing for AI systems
                  </li>
                  <li>
                    Knowledge of ROUGE, BLEU, BERTScore, and other NLP
                    evaluation metrics
                  </li>
                  <li>
                    Experience creating custom metrics for domain-specific tasks
                  </li>
                  <li>
                    Experience participating in quality governance committees
                  </li>
                </ul>
              </div>

              <div className="job-footer mt-4">
                <Link
                  className="default-btn"
                  href="https://forms.gle/prXqdMLTpZ3xH4mS7"
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
