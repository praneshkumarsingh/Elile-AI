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
                                    <Link href="/">Home</Link> / AI Engineer
                                </nav>
                                <h1 className="breadcumb-title">AI Engineer - Next Generation AI-native Applications</h1>
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
                                We're building AI-native applications that transform messy, real-world data into
                                actionable intelligence. You'll work on cutting-edge AI agents, production systems, and
                                applications that directly impact critical decision-making.
                                This is a builder's role - we need someone who ships fast, learns faster, and thrives with
                                minimal supervision.
                            </p>
                            <div className="career-list">
                                <h3>Core Responsibilities:</h3>

                                <ul>
                                    <li>
                                        Design and deploy end-to-end AI systems from prototype to production
                                    </li>
                                    <li>
                                        Build AI agents using latest models (GPT-4.1/O3/O4, Claude Opus 4, Gemini)
                                    </li>
                                    <li>
                                        Develop RAG systems and advanced information retrieval pipelines

                                    </li>
                                    <li>
                                        Fine-tune and deploy open-source LLMs for specialized tasks

                                    </li>
                                    <li>
                                        Create AI-native applications integrated with modern AI tools (Cursor, Cline,
                                        Claude Code)

                                    </li>
                                </ul>
                            </div>
                            <div className="career-list">
                                <h3>Technical Requirements:</h3>

                                <ul>
                                    <li>
                                        Proven track record building production systems
                                    </li>
                                    <li>
                                        Strong Python skills and experience with LangChain/LangGraph, LlamaIndex, or
                                        similar frameworks
                                    </li>
                                    <li>
                                        Expertise in vector databases, embeddings, and semantic search
                                    </li>
                                    <li>
                                        Experience with real-world messy data and ETL pipelines
                                    </li>
                                    <li>
                                        Excellent written/verbal communication
                                    </li>
                                </ul>
                            </div>
                            <div className="career-list">
                                <h3>Nice to Have</h3>
                                <ul>
                                    <li>
                                        Experience with multi-agent systems
                                    </li>
                                    <li>Some background or understanding of risk analysis or intelligence systems</li>
                                </ul>
                            </div>
                            <div className="career-list">
                                <h3>What We Offer</h3>
                                <ul>
                                    <li>
                                        Remote-first with occasional on-site collaboration
                                    </li>
                                    <li>Direct access to AI executives and cutting-edge infrastructure</li>
                                    <li>Work on mission-critical applications with real-world impact</li>
                                    <li>Competitive compensation and equity</li>
                                    <li>High-impact team environment</li>
                                </ul>
                            </div>

                            <div className="career-list">
                                <h3>Our Interview Process</h3>
                                <p>No leetcode. No artificial tests. You'll get a real problem, 7 days to build a solution
                                    using any AI tools, then present it to the team like you're already one of us.
                                    Details here
                                </p>
                            </div>

                            <div className="career-list">
                                <h3>To Apply</h3>
                                <p>Email your resume with:
                                </p>
                                <ul>
                                    <li>
                                        Specific AI projects you've shipped (with metrics)
                                    </li>
                                    <li>Your approach to building with AI</li>
                                    <li>Why you're excited about this role</li>

                                </ul>
                            </div>

                            <div className="career-list">
                                <p>A human will read your application, be clear, brief and please <strong>NO generic statement
                                    like “proven track-record of cross-functional expertise,”</strong> this does not mean
                                    anything and we can read between the lines.
                                </p>
                                <p>We want to get to know you, so make your application specific.
                                </p>
                                <p><strong>Final NOTE:</strong> if you do not have some of the qualifications above, but you are confident
                                    you can pass our technical assessment, still apply and we will give you a chance.</p>
                            </div>

                            <div className="career-list">
                                <ul>
                                    <li> <Link
                                        href="https://www.youtube.com/watch?v=LCEmiRjPEtQ"
                                        target="_blank"
                                        className="link-underline-primary"
                                    >
                                        Anthropic Video
                                    </Link></li>

                                    <li> <Link
                                        href="https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview"
                                        target="_blank"
                                        className="link-underline-primary"
                                    >
                                        Anthropic Docs - Prompt Engineering Overview
                                    </Link></li>
                                    <li> <Link
                                        href="https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/claude-4-best-practices"
                                        target="_blank"
                                        className="link-underline-primary"
                                    >
                                        Anthropic Docs - Claude 4 Best Practices
                                    </Link></li>
                                </ul>
                            </div>

                            <div className="job-footer mt-4">
                                <Link
                                    className="default-btn"
                                    href="mailto:people@elile.ai"
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
