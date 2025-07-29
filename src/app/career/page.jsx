"use client";
import React from "react";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { TbBriefcaseFilled } from "react-icons/tb";
import { useState } from "react";

const page = () => {
  const [showMore1, setShowMore1] = useState(false);
  const [showMore2, setShowMore2] = useState(false);
  const [showMore3, setShowMore3] = useState(false);
  const [showMore4, setShowMore4] = useState(false);
  const [showMore5, setShowMore5] = useState(false);
  const [showMore6, setShowMore6] = useState(false);
  const [showMore7, setShowMore7] = useState(false);
  const [showMore8, setShowMore8] = useState(false);
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
                  <Link href="/">Home</Link> / Career
                </nav>
                <h1 className="breadcumb-title">Career</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="career-sec section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="jobs-item">
                <h5>Senior Infrastructure Engineer </h5>
                <ul className="job-header-info list-unstyled">
                  <li>
                    <FaLocationDot /> Remote
                  </li>
                  <li>
                    <TbBriefcaseFilled /> 3+ years
                  </li>
                </ul>
                <div>
                  <p>
                    We are seeking an experienced Senior Infrastructure Engineer to lead the design, deployment, and maintenance of our on-premises Kubernetes-based data center infrastructure. This is a hands-on role encompassing physical hardware, virtualization, and cluster administration. You will ensure high availability, performance, and scalability while enabling secure and efficient workloads for both developers and operations.
                  </p>
                </div>
                <div className="job-footer">
                  <Link className="default-btn" href="/senior-infrastructure-engineer">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="jobs-item">
                <h5>DevOps / Platform Engineer </h5>
                <ul className="job-header-info list-unstyled">
                  <li>
                    <FaLocationDot /> Remote
                  </li>
                  <li>
                    <TbBriefcaseFilled /> 3+ years
                  </li>
                </ul>
                <div>
                  <p> We are hiring a DevOps / Platform Engineer to build and support internal developer platforms running on our Kubernetes-based on-prem infrastructure. You’ll own CI/CD pipelines, infrastructure-as-code automation, and GitOps workflows to accelerate development and deployment velocity. This role ensures our development teams can build, ship, and scale with minimal friction in a secure and resilient environment.
                  </p>
                </div>
                <div className="job-footer">
                  <Link className="default-btn" href="/devops-platform-engineer">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="jobs-item">
                <h5>AI Engineer - Next Generation AI-native Applications</h5>
                <ul className="job-header-info list-unstyled">
                  <li>
                    <FaLocationDot /> Remote
                  </li>
                  <li>
                    <TbBriefcaseFilled /> 3+ years
                  </li>
                </ul>
                <div>
                  <p>
                    We're building AI-native applications that transform messy, real-world data into
                    actionable intelligence. You'll work on cutting-edge AI agents, production systems, and
                    applications that directly impact critical decision-making.
                    This is a builder's role - we need someone who ships fast, learns faster, and thrives with
                    minimal supervision.
                  </p>
                </div>
                <div className="job-footer">
                  <Link className="default-btn" href="/ai-engineer">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="jobs-item">
                <h5>AI Quality Engineer</h5>
                <ul className="job-header-info list-unstyled">
                  <li>
                    <FaLocationDot /> Onsite / Muscat, Oman
                  </li>
                  <li>
                    <TbBriefcaseFilled /> 4+ years
                  </li>
                </ul>
                <div>
                  <p>
                    We are seeking a highly skilled AI Quality Engineer to join
                    our National Large Language Model (LLM) Project. This key
                    role will focus on establishing and implementing robust data
                    quality frameworks, evaluation methodologies, and quality
                    gates throughout the LLM development lifecycle. The ideal
                    candidate will ensure our Arabic LLM meets the highest
                    standards of performance, reliability, and cultural
                    appropriateness before being deployed to 20,000 government
                    employees.
                  </p>
                </div>
                <div className="job-footer">
                  <Link className="default-btn" href="/ai-quality-engineer">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="jobs-item">
                <h5>AI Expert and Consultant</h5>
                <ul className="job-header-info list-unstyled">
                  <li>
                    <FaLocationDot /> Onsite / Muscat, Oman
                  </li>
                  <li>
                    <TbBriefcaseFilled /> 5+ years
                  </li>
                </ul>
                <div>
                  <p>
                    We are seeking an experienced AI Expert and Consultant to
                    join our National Large Language Model (LLM) Project,
                    replacing ChatGPT usage in the workplace. As a key technical
                    advisor, you will provide expertise across the full LLM
                    stack, from model training and fine-tuning to deployment and
                    RAG implementation.
                  </p>
                </div>
                <div className="job-footer">
                  <Link
                    className="default-btn"
                    href="/ai-expert-and-consultant"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="jobs-item">
                <h5>AI Architect</h5>
                <ul className="job-header-info list-unstyled">
                  <li>
                    <FaLocationDot /> Remote / Hybrid
                  </li>
                  <li>
                    <TbBriefcaseFilled /> 10+ years
                  </li>
                </ul>
                <div>
                  <p>
                    We’re looking for a systems-first AI Architect to define and
                    own the technical architecture behind our multi-agent
                    intelligence platform. You’ll design secure, scalable AI
                    infrastructures leveraging LLMs, SLMs, symbolic reasoning,
                    and neuro-symbolic hybrid models — deployed across
                    mission-critical infrastructure like energy plants and data
                    centers.
                    <button
                      onClick={() => setShowMore1(!showMore1)}
                      className="read-toggle-btn"
                    >
                      {showMore1 ? "Read Less" : "Read More"}
                    </button>
                  </p>
                  {showMore1 && (
                    <div className="read-more">
                      <div className="job-list">
                        <h3>Key Responsibilities: </h3>
                        <ul>
                          <li>
                            Design distributed, modular AI systems for edge,
                            hybrid, and air-gapped deployments
                          </li>
                          <li>
                            Architect pipelines for training, fine-tuning, and
                            deploying LLMs and SLMs
                          </li>
                          <li>
                            Integrate symbolic AI with neural models for
                            real-time reasoning
                          </li>
                          <li>
                            Work cross-functionally with MLOps, RL engineers,
                            and platform leads to implement agentic workflows
                          </li>
                        </ul>
                      </div>
                      <div className="job-list">
                        <h3>Required Skills: </h3>
                        <ul>
                          <li>
                            Expertise in LLM stack: PyTorch, HuggingFace,
                            LangChain, RAG
                          </li>
                          <li>
                            Deep experience in distributed systems (Kubernetes,
                            Ray, Kafka)
                          </li>
                          <li>
                            Familiarity with neuro-symbolic systems and agent
                            collaboration protocols (e.g., A2A, MCP)
                          </li>
                          <li>
                            Prior experience in architecting secure AI platforms
                            for critical systems
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
                <div className="job-footer">
                  <a className="default-btn" href="mailto:people@elile.ai">
                    Apply Now
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-12">
              <div className="jobs-item">
                <h5>AI Tech Lead</h5>
                <ul className="job-header-info list-unstyled">
                  <li>
                    <FaLocationDot /> Remote / Hybrid
                  </li>
                  <li>
                    <TbBriefcaseFilled /> 7+ years
                  </li>
                </ul>
                <div>
                  <p>
                    We’re hiring a hands-on AI Tech Lead to guide engineering
                    delivery across complex AI infrastructure projects. You’ll
                    lead implementation of AI pipelines, mentor teams, and
                    ensure our agentic AI stack scales from research to robust
                    production.
                    <button
                      onClick={() => setShowMore2(!showMore2)}
                      className="read-toggle-btn"
                    >
                      {showMore2 ? "Read Less" : "Read More"}
                    </button>
                  </p>
                  {showMore2 && (
                    <div className="read-more">
                      <div className="job-list">
                        <h3>Key Responsibilities: </h3>
                        <ul>
                          <li>
                            Translate architectural specs into
                            implementation-ready engineering plans
                          </li>
                          <li>
                            Lead backend and ML teams across the AI development
                            lifecycle
                          </li>
                          <li>
                            Implement RL-based agents, optimization models, and
                            feedback loops
                          </li>
                          <li>
                            Ensure high-quality, testable code across AI model
                            deployment workflows
                          </li>
                        </ul>
                      </div>
                      <div className="job-list">
                        <h3>Required Skills: </h3>
                        <ul>
                          <li>
                            Strong in Python, PyTorch, TensorFlow, FastAPI
                          </li>
                          <li>
                            Experience building ML pipelines with MLflow,
                            Airflow, and Docker
                          </li>
                          <li>
                            Familiarity with multi-agent coordination,
                            reinforcement learning, and deployment best
                            practices
                          </li>
                          <li>
                            Track record in shipping AI systems within secure or
                            constrained environments
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
                <div className="job-footer">
                  <a className="default-btn" href="mailto:people@elile.ai">
                    Apply Now
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-12">
              <div className="jobs-item">
                <h5>AI/ML Engineer</h5>
                <ul className="job-header-info list-unstyled">
                  <li>
                    <FaLocationDot /> Remote / Hybrid
                  </li>
                  <li>
                    <TbBriefcaseFilled /> 4–6 years
                  </li>
                </ul>
                <div>
                  <p>
                    Work on cutting-edge AI infrastructure for real-time,
                    decision-making agents. You’ll help build multi-agent
                    systems that drive autonomous action across energy, compute,
                    and secure networks.
                    <button
                      onClick={() => setShowMore3(!showMore3)}
                      className="read-toggle-btn"
                    >
                      {showMore3 ? "Read Less" : "Read More"}
                    </button>
                  </p>
                  {showMore3 && (
                    <div className="read-more">
                      <div className="job-list">
                        <h3>Key Responsibilities: </h3>
                        <ul>
                          <li>
                            Build and optimize deep learning and RL models for
                            autonomous decision-making
                          </li>
                          <li>
                            Integrate AI with real-time sensor and compute data
                          </li>
                          <li>
                            Develop and deploy low-latency inference pipelines
                          </li>
                        </ul>
                      </div>
                      <div className="job-list">
                        <h3>Required Skills: </h3>
                        <ul>
                          <li>Proficiency with PyTorch, TensorFlow, JAX</li>
                          <li>Experience with RLlib, OpenAI Gym, ONNX</li>
                          <li>
                            Understanding of multi-agent systems and contextual
                            decision graphs
                          </li>
                          <li>
                            Familiarity with edge deployment and distributed
                            inference
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
                <div className="job-footer">
                  <a className="default-btn" href="mailto:people@elile.ai">
                    Apply Now
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-12">
              <div className="jobs-item">
                <h5>Reinforcement Learning Engineer</h5>
                <ul className="job-header-info list-unstyled">
                  <li>
                    <FaLocationDot /> Remote / Hybrid
                  </li>
                  <li>
                    <TbBriefcaseFilled /> 3–5 years
                  </li>
                </ul>
                <div>
                  <p>
                    Join our AI team to build learning agents for complex,
                    high-frequency decision environments. You'll develop RL
                    strategies for infrastructure optimization and anomaly
                    response.
                    <button
                      onClick={() => setShowMore4(!showMore4)}
                      className="read-toggle-btn"
                    >
                      {showMore4 ? "Read Less" : "Read More"}
                    </button>
                  </p>
                  {showMore4 && (
                    <div className="read-more">
                      <div className="job-list">
                        <h3>Key Responsibilities: </h3>
                        <ul>
                          <li>
                            Design, train, and evaluate RL models using custom
                            reward frameworks
                          </li>
                          <li>
                            Integrate RL into agentic AI pipelines for
                            infrastructure
                          </li>
                          <li>
                            Run simulations and fine-tune models in real-time
                            systems
                          </li>
                        </ul>
                      </div>
                      <div className="job-list">
                        <h3>Required Skills: </h3>
                        <ul>
                          <li>DQN, PPO, A3C, SAC algorithms</li>
                          <li>Experience with MuJoCo, Isaac Gym, Ray RLlib</li>
                          <li>
                            Deep understanding of state/action space design and
                            policy optimization
                          </li>
                          <li>
                            Applied RL experience in energy, compute, or
                            industrial contexts
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
                <div className="job-footer">
                  <a className="default-btn" href="mailto:people@elile.ai">
                    Apply Now
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-12">
              <div className="jobs-item">
                <h5>Data Scientist</h5>
                <ul className="job-header-info list-unstyled">
                  <li>
                    <FaLocationDot /> Remote / Hybrid
                  </li>
                  <li>
                    <TbBriefcaseFilled /> 4–6 years
                  </li>
                </ul>
                <div>
                  <p>
                    Apply statistical modeling and time-series forecasting to
                    high-frequency telemetry data. Your work will inform AI
                    agents and drive autonomous decision-making across
                    infrastructure.
                    <button
                      onClick={() => setShowMore5(!showMore5)}
                      className="read-toggle-btn"
                    >
                      {showMore5 ? "Read Less" : "Read More"}
                    </button>
                  </p>
                  {showMore5 && (
                    <div className="read-more">
                      <div className="job-list">
                        <h3>Key Responsibilities: </h3>
                        <ul>
                          <li>
                            Develop predictive models for faults, failures, and
                            anomalies
                          </li>
                          <li>
                            Analyze sensor streams and edge data for AI training
                            pipelines
                          </li>
                          <li>
                            Provide explainability and diagnostics for AI-driven
                            decisions
                          </li>
                        </ul>
                      </div>
                      <div className="job-list">
                        <h3>Required Skills: </h3>
                        <ul>
                          <li>Python, scikit-learn, XGBoost, SHAP</li>
                          <li>Time-series forecasting: Darts, Prophet</li>
                          <li>Data visualization: Grafana, Plotly</li>
                          <li>
                            Advanced statistical modeling & anomaly detection
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
                <div className="job-footer">
                  <a className="default-btn" href="mailto:people@elile.ai">
                    Apply Now
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-12">
              <div className="jobs-item">
                <h5>Data Engineer</h5>
                <ul className="job-header-info list-unstyled">
                  <li>
                    <FaLocationDot /> Remote / Hybrid
                  </li>
                  <li>
                    <TbBriefcaseFilled /> 3–5 years
                  </li>
                </ul>
                <div>
                  <p>
                    We’re looking for a Data Engineer to build scalable
                    pipelines across secure networks and AI ingestion layers.
                    You’ll manage data flows across structured, unstructured,
                    and streaming inputs.
                    <button
                      onClick={() => setShowMore6(!showMore6)}
                      className="read-toggle-btn"
                    >
                      {showMore6 ? "Read Less" : "Read More"}
                    </button>
                  </p>
                  {showMore6 && (
                    <div className="read-more">
                      <div className="job-list">
                        <h3>Key Responsibilities: </h3>
                        <ul>
                          <li>
                            Build and maintain high-throughput, secure data
                            pipelines
                          </li>
                          <li>
                            Design ingestion frameworks for SCADA, IoT, and
                            telemetry sources
                          </li>
                          <li>
                            Integrate pipelines with AI processing layers and
                            real-time analytics
                          </li>
                        </ul>
                      </div>
                      <div className="job-list">
                        <h3>Required Skills: </h3>
                        <ul>
                          <li>Kafka, Spark, Airflow, dbt</li>
                          <li>SQL, TimescaleDB, InfluxDB</li>
                          <li>Kubernetes, Docker</li>
                          <li>
                            Familiarity with encrypted data flows and edge
                            ingestion
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
                <div className="job-footer">
                  <a className="default-btn" href="mailto:people@elile.ai">
                    Apply Now
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-12">
              <div className="jobs-item">
                <h5>MLOps / AIOps Engineer</h5>
                <ul className="job-header-info list-unstyled">
                  <li>
                    <FaLocationDot /> Remote / Hybrid
                  </li>
                  <li>
                    <TbBriefcaseFilled /> 4–6 years
                  </li>
                </ul>
                <div>
                  <p>
                    Join our platform team to scale and secure AI operations.
                    You'll deploy ML pipelines in air-gapped and hybrid
                    environments with reliability, reproducibility, and
                    observability.
                    <button
                      onClick={() => setShowMore7(!showMore7)}
                      className="read-toggle-btn"
                    >
                      {showMore7 ? "Read Less" : "Read More"}
                    </button>
                  </p>
                  {showMore7 && (
                    <div className="read-more">
                      <div className="job-list">
                        <h3>Key Responsibilities: </h3>
                        <ul>
                          <li>
                            Manage CI/CD pipelines for model training,
                            validation, and deployment
                          </li>
                          <li>
                            Ensure model traceability, versioning, and rollback
                          </li>
                          <li>
                            Integrate observability with Prometheus and Grafana
                          </li>
                        </ul>
                      </div>
                      <div className="job-list">
                        <h3>Required Skills: </h3>
                        <ul>
                          <li>Kubeflow, MLflow, Metaflow</li>
                          <li>Terraform, Helm, Docker</li>
                          <li>Prometheus, Grafana, Loki</li>
                          <li>
                            Model serving: TorchServe, Seldon, ONNX Runtime
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
                <div className="job-footer">
                  <a className="default-btn" href="mailto:people@elile.ai">
                    Apply Now
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-12">
              <div className="jobs-item">
                <h5>Cloud / Edge Infrastructure Engineer</h5>
                <ul className="job-header-info list-unstyled">
                  <li>
                    <FaLocationDot /> Remote / Hybrid
                  </li>
                  <li>
                    <TbBriefcaseFilled /> 5+ years
                  </li>
                </ul>
                <div>
                  <p>
                    Build and secure infrastructure for AI systems operating
                    across edge, cloud, and air-gapped deployments. You'll
                    enable seamless orchestration and ensure low-latency
                    performance.
                    <button
                      onClick={() => setShowMore8(!showMore8)}
                      className="read-toggle-btn"
                    >
                      {showMore8 ? "Read Less" : "Read More"}
                    </button>
                  </p>
                  {showMore8 && (
                    <div className="read-more">
                      <div className="job-list">
                        <h3>Key Responsibilities: </h3>
                        <ul>
                          <li>
                            Build Kubernetes-based environments for
                            high-availability AI agents
                          </li>
                          <li>
                            Enable secure remote updates, patching, and
                            observability
                          </li>
                          <li>
                            Manage edge compute environments and container
                            orchestration
                          </li>
                        </ul>
                      </div>
                      <div className="job-list">
                        <h3>Required Skills: </h3>
                        <ul>
                          <li>Linux, K8s, Ansible, WireGuard</li>
                          <li>Cloud: AWS, Azure</li>
                          <li>Edge frameworks: KubeEdge, Greengrass</li>
                          <li>Network and system-level hardening</li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
                <div className="job-footer">
                  <a className="default-btn" href="mailto:people@elile.ai">
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default page;
