// ============================================
// NextGenData & MLOps – Content Database
// 40+ Pages with Real-World Production Examples
// ============================================

const SITE_CONTENT = {

  // ─── HOME PAGE ─────────────────────────────────
  home: {
    id: 'home',
    title: 'NextGenData & MLOps',
    category: 'Home',
    tags: [],
    lastUpdated: '2025-07-16',
    body: `
      <div class="home-hero">
        <h1>NextGenData & MLOps</h1>
        <p class="hero-subtitle">Production-grade notes, architectures, and real-world code examples for modern Data Engineering, ML Engineering & MLOps.</p>
        <div class="home-stats">
          <div class="stat-item"><div class="stat-number">40+</div><div class="stat-label">Topics</div></div>
          <div class="stat-item"><div class="stat-number">100+</div><div class="stat-label">Code Examples</div></div>
          <div class="stat-item"><div class="stat-number">10</div><div class="stat-label">Learning Paths</div></div>
        </div>
      </div>

      <div class="section-title"><span class="section-icon">📚</span> Learning Paths</div>
      <div class="cards-grid">
        <div class="card" onclick="navigateTo('de-fundamentals')">
          <span class="card-icon">🏗️</span>
          <div class="card-title">Data Engineering Fundamentals</div>
          <div class="card-desc">Core concepts: lifecycle, ETL/ELT, data modeling, batch vs stream</div>
          <div class="card-count">6 notes</div>
        </div>
        <div class="card" onclick="navigateTo('spark-intro')">
          <span class="card-icon">⚡</span>
          <div class="card-title">Apache Spark & Big Data</div>
          <div class="card-desc">PySpark, Structured Streaming, Delta Lake, performance tuning</div>
          <div class="card-count">4 notes</div>
        </div>
        <div class="card" onclick="navigateTo('kafka-architecture')">
          <span class="card-icon">📡</span>
          <div class="card-title">Apache Kafka & Streaming</div>
          <div class="card-desc">Architecture, producers/consumers, Connect, event pipelines</div>
          <div class="card-count">4 notes</div>
        </div>
        <div class="card" onclick="navigateTo('airflow-dag-patterns')">
          <span class="card-icon">🔄</span>
          <div class="card-title">Apache Airflow & Orchestration</div>
          <div class="card-desc">DAG patterns, dynamic generation, Docker/K8s, monitoring</div>
          <div class="card-count">4 notes</div>
        </div>
        <div class="card" onclick="navigateTo('dbt-core-vs-cloud')">
          <span class="card-icon">🔨</span>
          <div class="card-title">dbt & Data Transformation</div>
          <div class="card-desc">Core vs Cloud, project structure, incremental models, CI/CD</div>
          <div class="card-count">4 notes</div>
        </div>
        <div class="card" onclick="navigateTo('mlops-lifecycle')">
          <span class="card-icon">🤖</span>
          <div class="card-title">MLOps & ML Engineering</div>
          <div class="card-desc">Lifecycle, Level 1 Architecture, feature stores, training, serving, monitoring</div>
          <div class="card-count">7 notes</div>
        </div>
        <div class="card" onclick="navigateTo('docker-for-de')">
          <span class="card-icon">🐳</span>
          <div class="card-title">Docker & Kubernetes</div>
          <div class="card-desc">Containers, K8s fundamentals, ML on K8s, Helm charts</div>
          <div class="card-count">4 notes</div>
        </div>
        <div class="card" onclick="navigateTo('aws-data-stack')">
          <span class="card-icon">☁️</span>
          <div class="card-title">Cloud Data Platforms</div>
          <div class="card-desc">AWS, GCP, Azure data stacks and multi-cloud architecture</div>
          <div class="card-count">4 notes</div>
        </div>
        <div class="card" onclick="navigateTo('python-best-practices')">
          <span class="card-icon">🐍</span>
          <div class="card-title">Python for Data & ML</div>
          <div class="card-desc">Best practices, Pandas/Polars, FastAPI, testing pipelines</div>
          <div class="card-count">4 notes</div>
        </div>
        <div class="card" onclick="navigateTo('github-actions-pipelines')">
          <span class="card-icon">🚀</span>
          <div class="card-title">CI/CD & Infrastructure</div>
          <div class="card-desc">GitHub Actions, Terraform, DataOps, Prometheus & Grafana</div>
          <div class="card-count">4 notes</div>
        </div>
        <div class="card" onclick="navigateTo('fde-lifecycle')">
          <span class="card-icon">🌉</span>
          <div class="card-title">Forward Deployment Engineering</div>
          <div class="card-desc">Customer requirements, architecture, integration, and operations</div>
          <div class="card-count">1 notes</div>
        </div>
        <div class="card" onclick="navigateTo('mcp-tool-engineering')">
          <span class="card-icon">🔌</span>
          <div class="card-title">AI Agents & Tool Engineering</div>
          <div class="card-desc">Model Context Protocol, Tooling, and Agentic Workflows</div>
          <div class="card-count">3 notes</div>
        </div>
        <div class="card" onclick="navigateTo('build-ai-gateway')">
          <span class="card-icon">🧠</span>
          <div class="card-title">Build Your Own AI Gateway</div>
          <div class="card-desc">Switch models intelligently, don't fragment your context.</div>
          <div class="card-count">1 notes</div>
        </div>
        <div class="card" onclick="navigateTo('ai-architecture-stack')">
          <span class="card-icon">🏗️</span>
          <div class="card-title">AI Architecture Stack</div>
          <div class="card-desc">Enterprise-grade, modular, open-source, privacy-first AI stack</div>
          <div class="card-count">1 notes</div>
        </div>
      </div>

      <div class="section-title"><span class="section-icon">🔥</span> Featured Examples</div>
      <div class="cards-grid">
        <div class="card" onclick="navigateTo('large-model-deployment')">
          <span class="card-icon">🚀</span>
          <div class="card-title">Large Model Deployment</div>
          <div class="card-desc">Feature Ready Architecture from Design to Operations.</div>
          <div class="card-count">1 notes</div>
        </div>
        <div class="card" onclick="navigateTo('etl-vs-elt')">
          <span class="card-icon">📋</span>
          <div class="card-title">Production Airflow DAG</div>
          <div class="card-desc">Complete ETL pipeline with error handling, retries, and Slack alerts</div>
        </div>
        <div class="card" onclick="navigateTo('kafka-python')">
          <span class="card-icon">📋</span>
          <div class="card-title">Kafka Streaming Pipeline</div>
          <div class="card-desc">Real-time event streaming with Python producers & consumers</div>
        </div>
        <div class="card" onclick="navigateTo('model-serving')">
          <span class="card-icon">📋</span>
          <div class="card-title">ML Model Serving</div>
          <div class="card-desc">FastAPI + Docker model serving with health checks & monitoring</div>
        </div>
      </div>
    `
  },

  // ─── 00. AI AGENTS & TOOL ENGINEERING ──────────────
  'build-ai-gateway': {
    id: 'build-ai-gateway',
    title: 'Build Your Own AI Gateway',
    category: 'AI Agents & Tool Engineering',
    tags: ['ai-gateway', 'architecture', 'routing', 'llm'],
    lastUpdated: '2026-07-18',
    body: `
      <h2>Switch Models Intelligently</h2>
      <p>Every vendor is selling an "AI gateway" that magically routes each task to the best model and saves you money. Most of that pitch is a magic trick. In this guide, we build a real one — with code — that switches models intelligently, not with brittle keyword heuristics.</p>
      
      <div class="callout warning">
        <div class="callout-title">⚠️ The Golden Rule</div>
        <div class="callout-body">The model is <strong>rented</strong> and swappable; your context is the <strong>asset</strong>. A good gateway protects the context and treats a model switch as a rare, gated event — not a per-task gamble. Never fragment your context across models mid-task.</div>
      </div>

      <h3>The 3 Core Truths</h3>
      <div class="cards-grid">
        <div class="card" style="cursor: default;">
          <div class="card-title">1. Models are stateless</div>
          <div class="card-desc">The gateway holds everything. "Memory" features are just external storage re-injected into the prompt. The model is a commodity; your history is the moat.</div>
        </div>
        <div class="card" style="cursor: default;">
          <div class="card-title">2. Per-task routing costs 10x</div>
          <div class="card-desc">Cache reads are 90% cheaper. When a router sends the same context to a different model, the new model has no cache, causing a 10x cost jump and latency spike.</div>
        </div>
        <div class="card" style="cursor: default;">
          <div class="card-title">3. Switch at a gate, not per task</div>
          <div class="card-desc">Pin one model per project. When the capability need genuinely jumps, open a gate: log it, compact the context, re-inject, re-pin, and take the cold-cache bullet once.</div>
        </div>
      </div>

      <h3>The Architecture: Own the Context, Rent the Model</h3>
      <p>Your gateway owns the context store and the intelligence (judge + gate). Models are interchangeable engines behind a single provider adapter.</p>
      <div class="arch-diagram" style="background: transparent; border: none; padding: 0;">
        <pre class="mermaid">
flowchart TD
    Store[(Context Store<br/>history, files, pinned model)]:::storeNode
    
    Judge[Capability Judge<br/>LLM, not keywords]:::logicNode
    Gate[Escalation Gate<br/>deliberate & audited]:::logicNode
    Adapter[Provider Adapter<br/>one interface]:::logicNode

    Tier1[Tier 1<br/>cheap / fast]:::modelNode
    Tier2[Tier 2<br/>strong]:::modelNode
    Tier3[Tier 3<br/>frontier]:::modelNode

    Store --> Judge
    Store --> Gate
    Store --> Adapter

    Judge --> Tier1
    Gate --> Tier2
    Adapter --> Tier3

    classDef storeNode fill:#0f766e,stroke:#0d9488,stroke-width:2px,color:#fff
    classDef logicNode fill:#d97706,stroke:#b45309,stroke-width:2px,color:#fff
    classDef modelNode fill:#334155,stroke:#475569,stroke-width:2px,color:#fff
        </pre>
      </div>

      <hr style="margin: 40px 0; border-color: #334155;">

      <h2>Build it: A Small, Intelligent Gateway</h2>
      <p>Here is how you build the gateway in about 120 lines of Python. It pins a model per project, and escalates only at a gate — with the routing decision made by a model, not keyword rules.</p>

      <h3>1. The Registry (Models grouped by capability tier)</h3>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">python</span>
          <span style="color: #94a3b8; font-size: 0.85em; float: right;">registry.py</span>
        </div>
        <div class="code-content">
<pre><code>from dataclasses import dataclass, field

@dataclass(frozen=True)
class Model:
    name: str       # serving-endpoint name
    tier: int       # 1=cheap/fast, 2=strong, 3=frontier
    ctx_tokens: int

REGISTRY = [
    Model("databricks-meta-llama-3-3-70b-instruct", 1, 128_000),
    Model("databricks-claude-3-7-sonnet", 2, 200_000),
    Model("databricks-claude-opus-4", 3, 1_000_000),
]

def best_for(tier: int) -> Model:
    # cheapest model that meets the required capability tier
    return min((m for m in REGISTRY if m.tier >= tier), key=lambda m: m.tier)
</code></pre>
        </div>
      </div>

      <h3>2. The Context (The asset you own)</h3>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">python</span>
          <span style="color: #94a3b8; font-size: 0.85em; float: right;">context.py</span>
        </div>
        <div class="code-content">
<pre><code>class ProjectContext:
    """The ASSET. Lives in YOUR store, never inside a model."""
    
    def __init__(self, project_id: str, intent: str):
        self.project_id = project_id
        self.intent = intent
        self.history: list[dict] = [] # full transcript + tool results
        self.summary: str = ""        # compacted memory for handoffs
        self.pinned: Model | None = None # model affinity for this project
        
    def add(self, role, content):
        self.history.append({"role": role, "content": content})
        
    def messages(self):
        # full context is re-sent to whichever model runs
        sys = f"Project intent: {self.intent}\\nSummary: {self.summary}"
        return [{"role": "system", "content": sys}, *self.history]
</code></pre>
        </div>
      </div>

      <h3>3. The Provider (One interface, any model)</h3>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">python</span>
          <span style="color: #94a3b8; font-size: 0.85em; float: right;">provider.py</span>
        </div>
        <div class="code-content">
<pre><code>import os
from openai import OpenAI # Databricks FM APIs are OpenAI-compatible

_client = OpenAI(
    base_url=os.environ["DATABRICKS_HOST"] + "/serving-endpoints",
    api_key=os.environ["DATABRICKS_TOKEN"],
)

def complete(model: str, messages: list[dict], temperature=0.2) -> str:
    r = _client.chat.completions.create(
        model=model, messages=messages, temperature=temperature
    )
    return r.choices[0].message.content

# swap ANY provider by changing this one function — the context never moves.
</code></pre>
        </div>
      </div>

      <h3>4. The Judge (Intelligent routing)</h3>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">python</span>
          <span style="color: #94a3b8; font-size: 0.85em; float: right;">judge.py</span>
        </div>
        <div class="code-content">
<pre><code>import json
from provider import complete

JUDGE = "databricks-meta-llama-3-3-70b-instruct" # cheap model routes

JUDGE_PROMPT = """You are a capability router. Given the project intent
and the next task, return the MINIMUM tier needed to do it well:
 1 = trivial I/O, lookups, formatting, short extraction
 2 = solid reasoning, multi-file code, refactors, analysis
 3 = frontier: novel design, architecture, hard proofs, long plans
Return STRICT JSON: {"tier": int, "confidence": 0..1, "why": str}."""

def judge_tier(intent: str, task: str) -> dict:
    out = complete(JUDGE, [
        {"role": "system", "content": JUDGE_PROMPT},
        {"role": "user", "content": f"INTENT: {intent}\\nTASK: {task}"},
    ], temperature=0)
    return json.loads(out)
</code></pre>
        </div>
      </div>

      <h3>5. The Gate (Switch rarely, deliberately, and cheaply)</h3>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">python</span>
          <span style="color: #94a3b8; font-size: 0.85em; float: right;">gate.py</span>
        </div>
        <div class="code-content">
<pre><code>from registry import best_for
from judge import judge_tier
from provider import complete

def _compact(ctx) -> str:
    convo = "\\n".join(f"{m['role']}: {m['content']}" for m in ctx.history)
    return complete(ctx.pinned.name,
        [{"role": "user", 
          "content": "Summarize the essential state to continue:\\n" + convo}])

def resolve_model(ctx, task):
    v = judge_tier(ctx.intent, task)
    need = best_for(v["tier"])
    
    if ctx.pinned and need.tier <= ctx.pinned.tier:
        return ctx.pinned, v       # stay warm, ~0.1x cost
        
    if not ctx.pinned:
        ctx.pinned = need          # first pin, at intent time
        return ctx.pinned, v
        
    if v["confidence"] < 0.66:
        return ctx.pinned, v       # don't switch on a guess
        
    # --- CAPABILITY GATE: a real, confident jump ---
    audit(ctx, ctx.pinned, need, v) # log every escalation
    ctx.summary = _compact(ctx)     # shrink the bullet
    ctx.history = ctx.history[-4:]  # keep only recent verbatim
    ctx.pinned = need               # re-pin; next calls warm again
    return ctx.pinned, v
</code></pre>
        </div>
      </div>

      <h3>6. The Entry Point</h3>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">python</span>
          <span style="color: #94a3b8; font-size: 0.85em; float: right;">run.py</span>
        </div>
        <div class="code-content">
<pre><code>def audit(ctx, frm, to, v):
    print(f"[GATE] {ctx.project_id}: {frm.name} -> {to.name} "
          f"(tier {v['tier']}, conf {v['confidence']:.2f}) {v['why']}")

def ask(ctx, task):
    model, verdict = resolve_model(ctx, task)
    ctx.add("user", task)
    answer = complete(model.name, ctx.messages()) # full ctx -> pinned model
    ctx.add("assistant", answer)
    return answer, model, verdict

# usage
ctx = ProjectContext("proj-42", intent="analyze a data folder")
ask(ctx, "read and summarize the CSVs")         # tier 1 -> cheap, pinned
ask(ctx, "now design a migration to a lakehouse") # tier 3 -> GATE fires
</code></pre>
        </div>
      </div>

      <hr style="margin: 40px 0; border-color: #334155;">

      <h2>For Production: Use Databricks AI Gateway</h2>
      <p>Building your own is how you learn the mechanics — and how you keep the two things worth owning: the context and the intelligent gate. But you should not hand-roll governance, rate limits, cost logging, PII guardrails, and fallbacks. That is exactly what <strong>Databricks AI Gateway</strong> provides: one governed endpoint in front of every model, enforced by the platform, not your code.</p>

      <table>
        <thead>
          <tr><th>Your gateway keeps (in code)</th><th>Databricks AI Gateway runs (in platform)</th></tr>
        </thead>
        <tbody>
          <tr><td>The context store (the asset)</td><td>Unified endpoint across all providers</td></tr>
          <tr><td>The capability judge + gate</td><td>Rate limits & payload guardrails</td></tr>
          <tr><td>Project model-affinity policy</td><td>Usage & cost logging / attribution</td></tr>
          <tr><td>Compaction & audit trail</td><td>PII / safety guardrails, fallbacks</td></tr>
        </tbody>
      </table>
    `
  },

  'mcp-tool-engineering': {
    id: 'mcp-tool-engineering',
    title: 'Tool Engineering & Model Context Protocol (MCP)',
    category: 'AI Agents & Tool Engineering',
    tags: ['ai-agents', 'mcp', 'tool-engineering', 'llm'],
    lastUpdated: '2026-07-18',
    body: `
      <h2>Making Agents See and Do</h2>
      <p>Large Language Models (LLMs) are brilliant at reasoning and text generation, but they are inherently limited because they cannot interact with the real world. They have no web access, no code execution, no API calls, and no file system access.</p>
      
      <div class="callout info">
        <div class="callout-title">💡 The Solution</div>
        <div class="callout-body">Give LLMs <strong>Tools</strong>. Tool Engineering is the discipline of designing interfaces between AI agents and external systems to ensure agents are reliable, autonomous, and effective.</div>
      </div>

      <h3>Components of an Agentic System</h3>
      <div class="arch-diagram" style="background: transparent; border: none; padding: 0;">
        <pre class="mermaid">
flowchart TD
    Agent((Agent)):::agentNode
    Memory[Memory]:::compNode
    Tools[Tools]:::compNode
    Model[Model]:::compNode
    Planning[Planning &<br>Reasoning]:::compNode

    Memory <--> Agent
    Tools <--> Agent
    Model <--> Agent
    Planning <--> Agent

    classDef agentNode fill:#0ea5e9,stroke:#0284c7,stroke-width:3px,color:#fff,font-weight:bold
    classDef compNode fill:#f59e0b,stroke:#d97706,stroke-width:2px,color:#fff,rx:10px
        </pre>
      </div>

      <h3>What is a Tool?</h3>
      <p>Tools are external functions, APIs, or systems that an AI agent can invoke to gather information, perform actions, or interact with the environment.</p>
      <div class="cards-grid">
        <div class="card" style="cursor: default;">
          <div class="card-title">📚 Knowledge & Data</div>
          <div class="card-desc">Databases, Vector Stores, Document Retrievers.</div>
        </div>
        <div class="card" style="cursor: default;">
          <div class="card-title">🧮 Computation</div>
          <div class="card-desc">Optimizers, Calculators, Code Interpreters.</div>
        </div>
        <div class="card" style="cursor: default;">
          <div class="card-title">💬 Communication</div>
          <div class="card-desc">Email services, Slack/WhatsApp connectors, CRMs.</div>
        </div>
        <div class="card" style="cursor: default;">
          <div class="card-title">🔌 External APIs</div>
          <div class="card-desc">Payment gateways, Weather APIs, Stock tickers.</div>
        </div>
      </div>

      <h3>Tool Engineering Best Practices</h3>
      <ul>
        <li><strong>Building blocks, not prewired circuits:</strong> Allow LLMs to choose from an array of modular tools rather than forcing them into complex, hard-coded logic branches inside a single tool.</li>
        <li><strong>Designed for AI consumption:</strong> Tool descriptions must have explicit information about inputs, outputs, and errors. Outputs should be clean JSON optimized for LLMs.</li>
        <li><strong>Predictable & Specific:</strong> LLMs should easily determine what each tool does without guessing. Make the system deterministic, not probabilistic.</li>
        <li><strong>Safe & Secure:</strong> All tool access should be authenticated, authorized, and audited. Destructive tools (e.g., deleting data) must support rollback and alert humans.</li>
      </ul>

      <hr style="margin: 40px 0; border-color: #334155;">

      <h2>Model Context Protocol (MCP)</h2>
      <p>MCP is an open-source standard from Anthropic for connecting AI applications to external systems. Think of it as the <strong>USB-C port for AI Applications</strong>.</p>
      <p>MCP is to AI assistants what HTTP was to the web — a common protocol so models, apps, and tools can "talk" to each other in a safe, standardized way.</p>

      <h3>MCP Architecture</h3>
      <div class="arch-diagram" style="background: transparent; border: none; padding: 0;">
        <pre class="mermaid">
flowchart LR
    subgraph Host["MCP HOST (Agent / Claude / IDE)"]
        Client((MCP Client)):::clientNode
    end
    
    subgraph Server["MCP SERVER (External Tool)"]
        Tools((MCP Tools)):::serverNode
    end

    Client <-->|JSON-RPC / HTTP POST| Tools

    classDef clientNode fill:#3b82f6,stroke:#2563eb,stroke-width:3px,color:#fff
    classDef serverNode fill:#10b981,stroke:#059669,stroke-width:3px,color:#fff
        </pre>
      </div>

      <div class="pipeline-flow" style="margin-top: 20px;">
        <div class="pipeline-step" style="flex: 1;"><strong>Step 1: Discover</strong><br>Client requests <code>tools/list</code>.<br>Server responds with schema.</div>
        <span class="pipeline-arrow">→</span>
        <div class="pipeline-step" style="flex: 1;"><strong>Step 2: Invoke</strong><br>Client calls <code>tools/call</code> with arguments.<br>Server executes and returns results.</div>
      </div>

      <hr style="margin: 40px 0; border-color: #334155;">

      <h2>Real-Time Tutorial: Financial Data MCP Server</h2>
      <p>Let's build a production-ready example of an MCP server that allows an AI Agent to query live stock/crypto prices and execute simulated trades safely.</p>

      <h3>Step 1: Define the Tools</h3>
      <p>We define modular, specific tools. We avoid one giant <code>manage_finances</code> tool, and instead provide <code>get_live_price</code> and <code>place_trade</code>.</p>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">python</span>
        </div>
        <div class="code-content">
<pre><code>from mcp.server import Server, types

# Initialize the MCP Server
server = Server("financial-mcp-server")

@server.list_tools()
async def handle_list_tools() -> list[types.Tool]:
    return [
        types.Tool(
            name="get_live_price",
            description="Fetch the real-time price of a cryptocurrency or stock.",
            inputSchema={
                "type": "object",
                "properties": {
                    "asset_id": {"type": "string", "description": "The ticker symbol (e.g., BTC, AAPL)"}
                },
                "required": ["asset_id"]
            }
        ),
        types.Tool(
            name="place_trade",
            description="Place a buy or sell order for an asset. Requires user confirmation.",
            inputSchema={
                "type": "object",
                "properties": {
                    "asset_id": {"type": "string"},
                    "action": {"type": "string", "enum": ["buy", "sell"]},
                    "quantity": {"type": "number"}
                },
                "required": ["asset_id", "action", "quantity"]
            }
        )
    ]
</code></pre>
        </div>
      </div>

      <h3>Step 2: Implement Tool Execution (Sandboxed & Safe)</h3>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">python</span>
        </div>
        <div class="code-content">
<pre><code>import httpx

@server.call_tool()
async def handle_call_tool(name: str, arguments: dict) -> list[types.TextContent]:
    if name == "get_live_price":
        asset = arguments["asset_id"]
        # Simulated API call to a financial provider
        async with httpx.AsyncClient() as client:
            # Example: Fetching from a mock API
            # response = await client.get(f"https://api.finance.mock/{asset}")
            price = 94500.50 if asset == "BTC" else 150.00
            
            return [
                types.TextContent(
                    type="text",
                    text=f'{{"asset": "{asset}", "current_price_usd": {price}}}'
                )
            ]
            
    elif name == "place_trade":
        # Follows best practice: Destructive/Monetary actions require audit & rollback logic
        asset = arguments["asset_id"]
        action = arguments["action"]
        qty = arguments["quantity"]
        
        # Log to audit trail
        print(f"AUDIT: Attempting to {action} {qty} of {asset}")
        
        return [
            types.TextContent(
                type="text",
                text=f'{{"status": "SUCCESS", "message": "Executed {action} of {qty} {asset}"}}'
            )
        ]
        
    raise ValueError(f"Unknown tool: {name}")

# Run the server over stdio
async def main():
    from mcp.server.stdio import stdio_server
    async with stdio_server() as (read_stream, write_stream):
        await server.run(read_stream, write_stream, server.create_initialization_options())
</code></pre>
        </div>
      </div>

      <h3>Step 3: Connect & Test via Claude Desktop</h3>
      <p>To use this server, we configure our MCP Host (like the Claude Desktop app) to launch the server as a subprocess. The host communicates with our server using standard JSON-RPC over <code>stdio</code>.</p>
      
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">json</span>
        </div>
        <div class="code-content">
<pre><code>// claude_desktop_config.json
{
  "mcpServers": {
    "finance": {
      "command": "python",
      "args": ["/path/to/financial_server.py"]
    }
  }
}</code></pre>
        </div>
      </div>
      
      <p><strong>The Flow:</strong> When the user asks "What is the price of BTC and should I buy 2?", the Agent:</p>
      <ol>
        <li>Analyzes the request and determines it needs the <code>get_live_price</code> tool.</li>
        <li>Sends an MCP JSON-RPC call: <code>{"method": "tools/call", "params": {"name": "get_live_price", "arguments": {"asset_id": "BTC"}}}</code>.</li>
        <li>Receives the price ($94,500.50).</li>
        <li>Evaluates the logic, and decides to buy.</li>
        <li>Sends a second MCP call: <code>{"method": "tools/call", "params": {"name": "place_trade", "arguments": {"asset_id": "BTC", "action": "buy", "quantity": 2}}}</code>.</li>
        <li>Responds to the user: <em>"The current price of BTC is $94,500.50. I have successfully placed a buy order for 2 BTC."</em></li>
      </ol>
    `
  },

  'ai-architecture-stack': {
    id: 'ai-architecture-stack',
    title: 'AI Architecture Stack',
    category: 'AI Agents & Tool Engineering',
    tags: ['ai-stack', 'architecture', 'open-source', 'llm', 'rag', 'ollama', 'self-hosted'],
    lastUpdated: '2026-07-21',
    body: `
      <h2>Enterprise-Grade · Modular · Open Source · Privacy-First · Cost-Efficient</h2>
      <p>A complete, production-ready AI architecture stack built entirely on <strong>free and open-source tools</strong>. Run locally, maintain full data privacy, and scale from laptop to data center — all at $0 cost to start.</p>

      <div class="callout info">
        <div class="callout-title">💡 Why Open Source & Modular?</div>
        <div class="callout-body">Every component in this stack is either open-source, has a generous free tier, or runs locally on your hardware. No vendor lock-in. Full ownership of your data, context, and models.</div>
      </div>

      <div class="image-container" style="margin: 30px 0; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
        <img src="assets/images/ai-architecture-stack.png" alt="AI Architecture Stack" style="width: 100%; height: auto; display: block;" />
      </div>

      <h3>Key Principles</h3>
      <div class="cards-grid">
        <div class="card" style="cursor: default;">
          <div class="card-title">💰 $0 to Get Started</div>
          <div class="card-desc">No API costs, no subscriptions. Everything runs locally or has free tiers. Start building today without a credit card.</div>
        </div>
        <div class="card" style="cursor: default;">
          <div class="card-title">🔓 Open Source First</div>
          <div class="card-desc">Every layer uses open-source tools. No proprietary lock-in. Fork, customize, and extend anything in the stack.</div>
        </div>
        <div class="card" style="cursor: default;">
          <div class="card-title">🏠 Run Locally / Private</div>
          <div class="card-desc">Your data never leaves your infrastructure. Models run on your hardware. Full privacy and compliance by default.</div>
        </div>
        <div class="card" style="cursor: default;">
          <div class="card-title">📦 Modular & Scalable</div>
          <div class="card-desc">Swap any component. Scale from a single laptop to a GPU cluster. Each layer is independent and replaceable.</div>
        </div>
        <div class="card" style="cursor: default;">
          <div class="card-title">👁️ Full Observability</div>
          <div class="card-desc">Traces, metrics, logs, evaluations, and alerts across every layer. Know exactly what your AI is doing at all times.</div>
        </div>
      </div>

      <hr style="margin: 40px 0; border-color: #334155;">

      <h2>The Stack — Layer by Layer</h2>

      <h3>1. Frontend Layer</h3>
      <p>The user-facing interface. These tools let you build beautiful AI-powered web apps without complex frontend frameworks.</p>
      <table>
        <thead>
          <tr><th>Tool</th><th>What it Does</th><th>Why It's Here</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Next.js</strong></td><td>Full-stack React framework</td><td>Production-grade web apps with SSR, API routes, and edge functions</td></tr>
          <tr><td><strong>Streamlit</strong></td><td>Python-native UI framework</td><td>Prototype AI apps in minutes. Zero frontend code needed.</td></tr>
          <tr><td><strong>Vercel (Free Tier)</strong></td><td>Deployment platform</td><td>One-click deploy with CDN, serverless functions, and analytics</td></tr>
        </tbody>
      </table>

      <h3>2. Agent Orchestrator Layer — The Brain</h3>
      <p>The orchestrator plans, reasons, and delegates tasks to the right tools and models. It's the central nervous system of your AI application.</p>
      <table>
        <thead>
          <tr><th>Tool</th><th>Approach</th><th>Best For</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>LangGraph</strong></td><td>Graph-based agent workflows</td><td>Complex, stateful multi-step agents with cycles and branching</td></tr>
          <tr><td><strong>CrewAI</strong></td><td>Role-based multi-agent</td><td>Teams of specialized agents collaborating on tasks</td></tr>
        </tbody>
      </table>
      <div class="callout warning">
        <div class="callout-title">⚠️ Orchestrator ≠ Framework Lock-in</div>
        <div class="callout-body">The orchestrator is the <strong>most opinionated</strong> layer. Choose one based on your use case: <em>LangGraph</em> for graph-based control flow, <em>CrewAI</em> for multi-agent collaboration. Both work with every other layer in this stack.</div>
      </div>

      <h3>3. Local LLM Layer (via Ollama)</h3>
      <p>Run large language models locally. No API costs. No data leaving your machine. Full privacy.</p>
      <table>
        <thead>
          <tr><th>Model</th><th>Parameters</th><th>Best For</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Gemma 4 E4B</strong></td><td>Efficient 4B</td><td>Fast local inference, edge deployment, resource-constrained environments</td></tr>
          <tr><td><strong>Llama 3.3 70B</strong></td><td>70B</td><td>Strong reasoning, code generation, complex analysis</td></tr>
          <tr><td><strong>Mistral Small 4</strong></td><td>Small</td><td>Lightweight tasks, high-throughput scenarios, multilingual</td></tr>
        </tbody>
      </table>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">bash</span>
          <span style="color: #94a3b8; font-size: 0.85em; float: right;">Getting started with Ollama</span>
        </div>
        <div class="code-content">
<pre><code># Install Ollama
curl -fsSL https://ollama.com/install.sh | sh

# Pull and run models locally
ollama pull gemma4:e4b
ollama pull llama3.3:70b
ollama pull mistral-small:latest

# Run a model — it's now an OpenAI-compatible API on localhost:11434
ollama run gemma4:e4b "Explain RAG in 3 sentences"

# Use from Python with the OpenAI SDK
# client = OpenAI(base_url="http://localhost:11434/v1", api_key="ollama")</code></pre>
        </div>
      </div>

      <hr style="margin: 40px 0; border-color: #334155;">

      <h3>4. RAG Pipeline — Retrieve → Augment → Generate</h3>
      <p>When the LLM needs external knowledge, the RAG pipeline retrieves relevant documents, augments the prompt, and generates grounded answers.</p>
      <div class="pipeline-flow">
        <div class="pipeline-step"><strong>Retrieval</strong><br>Find relevant chunks from your knowledge base</div>
        <span class="pipeline-arrow">→</span>
        <div class="pipeline-step"><strong>Processing</strong><br>Chunking, Embedding, Reranking for precision</div>
        <span class="pipeline-arrow">→</span>
        <div class="pipeline-step"><strong>Generation</strong><br>Augmented Prompt + LLM produces grounded answer</div>
      </div>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">python</span>
          <span style="color: #94a3b8; font-size: 0.85em; float: right;">LlamaIndex RAG Pipeline</span>
        </div>
        <div class="code-content">
<pre><code>from llama_index.core import VectorStoreIndex, SimpleDirectoryReader
from llama_index.llms.ollama import Ollama
from llama_index.embeddings.huggingface import HuggingFaceEmbedding

# Use local Ollama model — $0 cost
llm = Ollama(model="llama3.3:70b", request_timeout=120)
embed = HuggingFaceEmbedding(model_name="BAAI/bge-small-en-v1.5")

# Load documents and build index
documents = SimpleDirectoryReader("./data").load_data()
index = VectorStoreIndex.from_documents(
    documents, llm=llm, embed_model=embed
)

# Query with RAG — retrieves relevant chunks automatically
query_engine = index.as_query_engine(similarity_top_k=5)
response = query_engine.query("What is the deployment architecture?")
print(response)</code></pre>
        </div>
      </div>

      <h3>5. Vector Database — Store & Search Embeddings</h3>
      <p>Vector databases store document embeddings and enable fast semantic similarity search for your RAG pipeline.</p>
      <table>
        <thead>
          <tr><th>Database</th><th>Deployment</th><th>Best For</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Qdrant</strong></td><td>Self-hosted / Cloud</td><td>Production-grade, Rust-powered, rich filtering, best performance</td></tr>
          <tr><td><strong>ChromaDB</strong></td><td>Embedded / Self-hosted</td><td>Quick prototyping, Python-native, simple API, great for dev</td></tr>
          <tr><td><strong>Milvus</strong></td><td>Self-hosted / Cloud</td><td>Massive scale (billions of vectors), distributed, GPU-accelerated</td></tr>
        </tbody>
      </table>

      <hr style="margin: 40px 0; border-color: #334155;">

      <h3>6. MCP Tool Layer (Model Context Protocol)</h3>
      <p>MCP servers extend your agents with external capabilities — GitHub, Slack, databases, APIs, and filesystems — all through a standardized protocol.</p>
      <div class="cards-grid">
        <div class="card" style="cursor: default;">
          <div class="card-title">🐙 GitHub</div>
          <div class="card-desc">Search repos, create issues, manage PRs, read code — all from your agent.</div>
        </div>
        <div class="card" style="cursor: default;">
          <div class="card-title">💬 Slack</div>
          <div class="card-desc">Send messages, search channels, manage threads and notifications.</div>
        </div>
        <div class="card" style="cursor: default;">
          <div class="card-title">🗄️ Oracle DB</div>
          <div class="card-desc">Query enterprise databases, run reports, manage schemas.</div>
        </div>
        <div class="card" style="cursor: default;">
          <div class="card-title">🔗 REST APIs</div>
          <div class="card-desc">Connect to any HTTP API — weather, payments, CRMs, custom services.</div>
        </div>
        <div class="card" style="cursor: default;">
          <div class="card-title">📁 Filesystem</div>
          <div class="card-desc">Read, write, and manage local files and directories securely.</div>
        </div>
      </div>

      <h3>7. Code Agent Layer — AI Pair Programmer</h3>
      <p>Terminal-based AI coding assistants that work directly in your development environment.</p>
      <table>
        <thead>
          <tr><th>Tool</th><th>What it Does</th><th>Key Feature</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Claude Code CLI</strong></td><td>Agentic coding in terminal</td><td>Full codebase context, file edits, shell commands, git integration</td></tr>
          <tr><td><strong>Aider</strong></td><td>AI pair programming</td><td>Works with any LLM (local or API), git-aware, multi-file edits</td></tr>
        </tbody>
      </table>

      <hr style="margin: 40px 0; border-color: #334155;">

      <h3>8. Data Layer — Structured & Unstructured Data</h3>
      <p>The persistent storage layer for your application data, metadata, and state.</p>
      <table>
        <thead>
          <tr><th>Database</th><th>Type</th><th>Best For</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>PostgreSQL</strong></td><td>Relational (OLTP)</td><td>Application state, user data, transactional workloads, pgvector for embeddings</td></tr>
          <tr><td><strong>DuckDB</strong></td><td>Analytical (OLAP)</td><td>Local analytics, Parquet/CSV queries, in-process — no server needed</td></tr>
          <tr><td><strong>Supabase (Free Tier)</strong></td><td>Backend-as-a-Service</td><td>Auth, real-time DB, storage, edge functions — Postgres under the hood</td></tr>
        </tbody>
      </table>

      <h3>9. Infrastructure Layer (Local / Self-Hosted)</h3>
      <p>The compute foundation. Whether it's your local workstation or a dedicated GPU cluster, this layer provides the hardware power for model inference and data processing.</p>
      <div class="cards-grid">
        <div class="card" style="cursor: default;">
          <div class="card-title">🎮 NVIDIA GPU (Optional)</div>
          <div class="card-desc">Dedicated GPU hardware acceleration for high-throughput 70B+ model inference.</div>
        </div>
        <div class="card" style="cursor: default;">
          <div class="card-title">💻 Local GPU / CPU Machine</div>
          <div class="card-desc">Run smaller models (e.g., Gemma 4B, Mistral Small) directly on workstations or laptops.</div>
        </div>
        <div class="card" style="cursor: default;">
          <div class="card-title">💾 Fast Storage (NVMe / SSD)</div>
          <div class="card-desc">High-speed storage for loading model weights, vector indices, and document caches.</div>
        </div>
        <div class="card" style="cursor: default;">
          <div class="card-title">🧠 Memory Optimized</div>
          <div class="card-desc">High RAM allocation for expanding context windows and storing KV caches.</div>
        </div>
      </div>

      <h3>10. Deployment Layer — Deploy Anywhere</h3>
      <p>Package and deploy your AI stack to any environment — from local Docker containers to global edge networks.</p>
      <table>
        <thead>
          <tr><th>Platform</th><th>Use Case</th><th>Cost</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Docker</strong></td><td>Containerized local/cloud deployment</td><td>Free (open-source)</td></tr>
          <tr><td><strong>Kubernetes</strong></td><td>Orchestrated, auto-scaling production</td><td>Free (open-source)</td></tr>
          <tr><td><strong>Cloudflare Workers</strong></td><td>Edge deployment, serverless</td><td>Generous free tier</td></tr>
          <tr><td><strong>Hugging Face Spaces</strong></td><td>Demo & prototype hosting</td><td>Free for CPU instances</td></tr>
        </tbody>
      </table>

      <hr style="margin: 40px 0; border-color: #334155;">

      <h2>Observability Layer — Monitor Everything</h2>
      <p>Full-stack observability across every layer. Traces, metrics, logs, evaluations, and alerts — all open-source.</p>
      <table>
        <thead>
          <tr><th>Tool</th><th>What It Monitors</th><th>Key Feature</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Langfuse</strong></td><td>LLM traces & evaluations</td><td>Track every LLM call, cost, latency, and quality. Open-source Langsmith alternative.</td></tr>
          <tr><td><strong>OpenTelemetry</strong></td><td>Distributed tracing</td><td>Vendor-neutral instrumentation for services, APIs, and pipelines.</td></tr>
          <tr><td><strong>Arize Phoenix (Self-Hosted)</strong></td><td>ML observability</td><td>Embedding drift, retrieval quality, LLM evals — all in one UI.</td></tr>
          <tr><td><strong>Grafana</strong></td><td>Dashboards & alerting</td><td>Visualize metrics from any source. Prometheus, Loki, Tempo integration.</td></tr>
        </tbody>
      </table>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">python</span>
          <span style="color: #94a3b8; font-size: 0.85em; float: right;">Langfuse Tracing Example</span>
        </div>
        <div class="code-content">
<pre><code>from langfuse import Langfuse

# Self-hosted Langfuse — full data privacy
lf = Langfuse(
    public_key="pk-local",
    secret_key="sk-local",
    host="http://localhost:3000"  # self-hosted instance
)

# Trace every LLM call automatically
trace = lf.trace(name="rag-query", user_id="user-42")
span = trace.span(name="retrieval", input={"query": "deployment arch"})
# ... your retrieval logic ...
span.end(output={"num_chunks": 5, "top_score": 0.92})

generation = trace.generation(
    name="llm-call",
    model="llama3.3:70b",
    input=[{"role": "user", "content": "..."}],
    output="The deployment architecture uses...",
    usage={"prompt_tokens": 1200, "completion_tokens": 350}
)

# View traces at http://localhost:3000
# Cost: $0 | Data: stays on your server</code></pre>
        </div>
      </div>

      <hr style="margin: 40px 0; border-color: #334155;">

      <h2>End-to-End Flow</h2>
      <p>Here's how a user request flows through the entire stack:</p>
      <div class="pipeline-flow">
        <div class="pipeline-step"><strong>User</strong><br>Sends request via UI</div>
        <span class="pipeline-arrow">→</span>
        <div class="pipeline-step"><strong>Frontend</strong><br>Next.js / Streamlit</div>
        <span class="pipeline-arrow">→</span>
        <div class="pipeline-step"><strong>Agent Orchestrator</strong><br>LangGraph / CrewAI</div>
        <span class="pipeline-arrow">→</span>
        <div class="pipeline-step"><strong>LLM</strong><br>Ollama (local)</div>
        <span class="pipeline-arrow">→</span>
        <div class="pipeline-step"><strong>RAG / Tools</strong><br>Retrieve & augment</div>
        <span class="pipeline-arrow">→</span>
        <div class="pipeline-step"><strong>Data</strong><br>Postgres / DuckDB</div>
        <span class="pipeline-arrow">→</span>
        <div class="pipeline-step"><strong>Response</strong><br>Grounded answer</div>
      </div>

      <hr style="margin: 40px 0; border-color: #334155;">

      <h2>Benefits</h2>
      <div class="cards-grid">
        <div class="card" style="cursor: default;">
          <div class="card-title">✅ Zero Cost to Start</div>
          <div class="card-desc">Every tool is free or open-source. No credit card, no API keys, no vendor contracts required to build your first AI app.</div>
        </div>
        <div class="card" style="cursor: default;">
          <div class="card-title">✅ Full Data Privacy</div>
          <div class="card-desc">Models run locally via Ollama. Data stays on your infrastructure. Fully compliant with GDPR, HIPAA, and enterprise security policies.</div>
        </div>
        <div class="card" style="cursor: default;">
          <div class="card-title">✅ Open & Extensible</div>
          <div class="card-desc">Swap any layer without rewriting the stack. Add new models, databases, or tools without breaking existing workflows.</div>
        </div>
        <div class="card" style="cursor: default;">
          <div class="card-title">✅ Production Ready</div>
          <div class="card-desc">Not a toy stack. Kubernetes deployment, observability, security, and monitoring are built in from day one.</div>
        </div>
        <div class="card" style="cursor: default;">
          <div class="card-title">✅ End-to-End Solution</div>
          <div class="card-desc">From user interface to GPU infrastructure — every layer is covered. No gaps, no "and then you figure it out" steps.</div>
        </div>
      </div>

      <hr style="margin: 40px 0; border-color: #334155;">

      <h2>Quick Start: Full Stack in 10 Minutes</h2>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">bash</span>
          <span style="color: #94a3b8; font-size: 0.85em; float: right;">docker-compose.yml bootstrap</span>
        </div>
        <div class="code-content">
<pre><code># 1. Install Ollama and pull a model
curl -fsSL https://ollama.com/install.sh | sh
ollama pull gemma4:e4b

# 2. Start vector DB + observability stack
docker compose up -d qdrant langfuse postgres

# 3. Install Python dependencies
pip install llama-index langfuse chromadb qdrant-client

# 4. Run your first RAG query
python -c "
from llama_index.core import VectorStoreIndex, SimpleDirectoryReader
from llama_index.llms.ollama import Ollama
llm = Ollama(model='gemma4:e4b')
docs = SimpleDirectoryReader('./data').load_data()
idx = VectorStoreIndex.from_documents(docs, llm=llm)
print(idx.as_query_engine().query('Summarize the key points'))
"

# 5. Deploy with Docker
docker build -t my-ai-app .
docker run -p 8000:8000 my-ai-app

# Total cost: $0 | Total time: ~10 minutes</code></pre>
        </div>
      </div>
    `
  },

  // ─── 0. FORWARD DEPLOYMENT ENGINEERING ──────────────
  'large-model-deployment': {
    id: 'large-model-deployment',
    title: 'Large Model Deployment Architecture',
    category: 'Forward Deployment Engineering',
    tags: ['deployment', 'architecture', 'llm', 'infrastructure'],
    lastUpdated: '2026-07-18',
    body: `
      <h2>Large Model Deployment – Feature Ready Architecture</h2>
      <p>A comprehensive architecture for deploying large foundational and fine-tuned models from design to operations.</p>
      
      <div class="image-container" style="margin: 30px 0; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
        <img src="assets/images/large-model-deployment.jpg" alt="Large Model Deployment Architecture" style="width: 100%; height: auto; display: block;" />
      </div>

      <div class="cards-grid">
        <div class="card" style="cursor: default;">
          <div class="card-title">1. Access & Service Layer</div>
          <div class="card-desc">API Gateway, Auth & IAM, Rate Limiting, and the Model Inference Service (including RAG).</div>
        </div>
        <div class="card" style="cursor: default;">
          <div class="card-title">2. Model Layer</div>
          <div class="card-desc">Proprietary and Fine-Tuned Models with orchestration (Routing, Caching, Autoscaling) and management (Registry, A/B Testing).</div>
        </div>
        <div class="card" style="cursor: default;">
          <div class="card-title">3. Data & Integration Layer</div>
          <div class="card-desc">Vector DBs, Metadata Store, Redis Cache, Kafka Message Queues, and Enterprise Systems (ERP, CRM).</div>
        </div>
        <div class="card" style="cursor: default;">
          <div class="card-title">4. Compute Infrastructure</div>
          <div class="card-desc">High-performance NVIDIA GB300 GPUs, NVLink interconnects, and liquid-cooled data centers providing 120 MW of capacity.</div>
        </div>
      </div>
    `
  },

  'fde-lifecycle': {
    id: 'fde-lifecycle',
    title: 'Forward Deployment Engineer Lifecycle',
    category: 'Forward Deployment Engineering',
    tags: ['fde', 'architecture', 'lifecycle', 'deployment'],
    lastUpdated: '2026-07-18',
    body: `
      <h2>Forward Deployment Engineer (FDE) Lifecycle</h2>
      <p>A Forward Deployment Engineer bridges the gap between software engineering, solutions architecture, customer success, and product development.</p>

      <h3>End-to-End Lifecycle</h3>
      <div class="arch-diagram" style="background: transparent; border: none; overflow: visible; padding: 0;">
        <img src="assets/images/fde-lifecycle.jpg" alt="Forward Deployment Engineer Lifecycle" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" />
      </div>

      <h3>The 6 Core Responsibilities of an FDE</h3>
      <div class="cards-grid">
        <div class="card">
          <div class="card-title">01. Understand the Business Problem</div>
          <div class="card-desc">Sit with the customer to find high-impact AI use cases and meticulously map out the workflow.</div>
        </div>
        <div class="card">
          <div class="card-title">02. Deploy AI Models & Agents</div>
          <div class="card-desc">Deploy LLMs, RAG systems, agents, and automation workflows that are custom-fit to the customer's needs.</div>
        </div>
        <div class="card">
          <div class="card-title">03. Build the Integrations</div>
          <div class="card-desc">Seamlessly connect CRMs, ERPs, internal databases, cloud platforms, APIs, and enterprise apps.</div>
        </div>
        <div class="card">
          <div class="card-title">04. Run the AI Infrastructure</div>
          <div class="card-desc">Manage cloud deployments, vector DBs, Kubernetes clusters, MLOps pipelines, and security guardrails.</div>
        </div>
        <div class="card">
          <div class="card-title">05. Talk to Humans, Not Just Code</div>
          <div class="card-desc">Translate complex AI concepts for business leaders, product teams, and non-technical stakeholders.</div>
        </div>
        <div class="card">
          <div class="card-title">06. Drive Adoption & Measure ROI</div>
          <div class="card-desc">Train teams, optimize workflows, scale successful pilots, and mathematically prove the business outcome.</div>
        </div>
      </div>

      <h3>Typical Delivery Timeline</h3>
      <div class="pipeline-flow">
        <div class="pipeline-step"><strong>Wk 04: Prototype</strong><br>First working AI tool + 1-page write-up</div>
        <span class="pipeline-arrow">→</span>
        <div class="pipeline-step"><strong>Wk 10: Production RAG</strong><br>RAG system + arch doc + eval</div>
        <span class="pipeline-arrow">→</span>
        <div class="pipeline-step"><strong>Wk 15: Regulated Rebuild</strong><br>Architecture + prototype + risk registry</div>
        <span class="pipeline-arrow">→</span>
        <div class="pipeline-step"><strong>Wk 17: Security Audit</strong><br>End-to-end security & compliance audit</div>
      </div>

      <h3>Core FDE Skillset (Build & Deliver)</h3>
      <table>
        <thead>
          <tr><th>Category</th><th>Topic</th><th>Description</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>BUILD</strong></td><td>Fine-Tuning & Customisation</td><td>When to fine-tune vs prompt vs RAG. SFT, LoRA / QLoRA, distillation, dataset prep, eval gates, cost-benefit math.</td></tr>
          <tr><td><strong>BUILD</strong></td><td>Deploying AI in Production</td><td>AWS Bedrock, Azure OpenAI, GCP Vertex. Serving frameworks, latency optimisation, caching, autoscaling.</td></tr>
          <tr><td><strong>BUILD</strong></td><td>Cost, Latency & Scale</td><td>Token economics, caching layers, model routing, batching. Turning an unprofitable demo into a profitable product.</td></tr>
          <tr><td><strong>BUILD</strong></td><td>Enterprise Integration</td><td>Customer data schemas, lineage, secrets, audit trails. SOC2, HIPAA, DPDP. On-prem and VPC deployments.</td></tr>
          <tr><td><strong>DELIVER</strong></td><td>Security & Responsible AI</td><td>OWASP for LLMs, prompt-injection defence, hallucination handling, PII, bias audits, DPDP & EU AI Act.</td></tr>
          <tr><td><strong>DELIVER</strong></td><td>Stakeholder Alignment</td><td>Delivery planning, iteration cycles, managing scope changes, running war rooms during incidents.</td></tr>
          <tr><td><strong>BUILD</strong></td><td>Vertical Playbooks</td><td>Deep dives into named domains (Fraud detection, ticket routing, multilingual workflows, clinical-grade healthcare RAG).</td></tr>
          <tr><td><strong>DELIVER</strong></td><td>AI Product Sense</td><td>Spotting patterns across deployments. When to build vs configure. Writing PRDs, solution-design docs, and scoping pilots vs production.</td></tr>
        </tbody>
      </table>
    `
  },

  // ─── 1. DATA ENGINEERING FUNDAMENTALS ──────────────
  'de-fundamentals': {
    id: 'de-fundamentals',
    title: 'What is Data Engineering?',
    category: 'Data Engineering Fundamentals',
    tags: ['fundamentals', 'data-engineering', 'overview'],
    lastUpdated: '2025-07-10',
    body: `
      <h2>What is Data Engineering?</h2>
      <p>Data Engineering is the practice of designing, building, and maintaining the infrastructure and systems that enable organizations to collect, store, process, and analyze data at scale. It sits at the intersection of software engineering and data science.</p>

      <div class="callout info">
        <div class="callout-title">💡 Key Insight</div>
        <div class="callout-body">A Data Engineer's primary job is to build reliable data pipelines that move data from source systems to analytical destinations — ensuring data quality, freshness, and accessibility.</div>
      </div>

      <h3>Core Responsibilities</h3>
      <ul>
        <li><strong>Data Ingestion</strong> — Extracting data from APIs, databases, files, and streaming sources</li>
        <li><strong>Data Transformation</strong> — Cleaning, enriching, and reshaping data for consumption</li>
        <li><strong>Data Storage</strong> — Designing and managing data warehouses, lakes, and lakehouses</li>
        <li><strong>Data Orchestration</strong> — Scheduling and monitoring data workflows</li>
        <li><strong>Data Quality</strong> — Implementing tests, validations, and monitoring</li>
        <li><strong>Infrastructure</strong> — Managing compute clusters, cloud resources, and CI/CD</li>
      </ul>

      <h3>Modern Data Engineering Tech Stack</h3>
      <table>
        <thead>
          <tr><th>Layer</th><th>Tools</th><th>Purpose</th></tr>
        </thead>
        <tbody>
          <tr><td>Ingestion</td><td>Airbyte, Fivetran, Debezium</td><td>Extract data from sources</td></tr>
          <tr><td>Storage</td><td>S3, GCS, ADLS, Delta Lake</td><td>Raw & processed data storage</td></tr>
          <tr><td>Processing</td><td>Spark, Flink, dbt, Polars</td><td>Batch & stream transformations</td></tr>
          <tr><td>Orchestration</td><td>Airflow, Dagster, Prefect</td><td>Workflow scheduling</td></tr>
          <tr><td>Serving</td><td>BigQuery, Snowflake, Redshift</td><td>Analytical queries</td></tr>
          <tr><td>Quality</td><td>Great Expectations, dbt tests, Soda</td><td>Data validation</td></tr>
          <tr><td>Observability</td><td>Monte Carlo, Datadog, Grafana</td><td>Pipeline monitoring</td></tr>
        </tbody>
      </table>

      <h3>Data Engineering vs. Related Roles</h3>
      <table>
        <thead>
          <tr><th>Role</th><th>Focus</th><th>Key Skills</th></tr>
        </thead>
        <tbody>
          <tr><td>Data Engineer</td><td>Build & maintain data infrastructure</td><td>Python, SQL, Spark, Airflow, Cloud</td></tr>
          <tr><td>Data Scientist</td><td>Extract insights & build models</td><td>Python, Statistics, ML, Visualization</td></tr>
          <tr><td>Data Analyst</td><td>Analyze data & create reports</td><td>SQL, BI Tools, Excel, Visualization</td></tr>
          <tr><td>ML Engineer</td><td>Productionize ML models</td><td>Python, Docker, K8s, MLOps, APIs</td></tr>
          <tr><td>Analytics Engineer</td><td>Transform data for analytics</td><td>SQL, dbt, Data Modeling</td></tr>
        </tbody>
      </table>
    `
  },

  'de-lifecycle': {
    id: 'de-lifecycle',
    title: 'Data Engineering Lifecycle',
    category: 'Data Engineering Fundamentals',
    tags: ['lifecycle', 'architecture', 'fundamentals'],
    lastUpdated: '2025-07-08',
    body: `
      <h2>The Data Engineering Lifecycle</h2>
      <p>The Data Engineering Lifecycle, as defined by Joe Reis and Matt Housley, describes the stages data passes through from source to serving. Understanding this lifecycle is crucial for building reliable data systems.</p>

      <div class="arch-diagram"><pre>
┌─────────────────────────────────────────────────────────────────┐
│                    DATA ENGINEERING LIFECYCLE                    │
│                                                                 │
│  ┌──────────┐   ┌──────────┐   ┌───────────┐   ┌───────────┐  │
│  │          │   │          │   │           │   │           │  │
│  │ Generate │──▶│  Ingest  │──▶│ Transform │──▶│   Serve   │  │
│  │          │   │          │   │           │   │           │  │
│  └──────────┘   └──────────┘   └───────────┘   └───────────┘  │
│       │              │              │               │          │
│  ┌────▼──────────────▼──────────────▼───────────────▼────────┐ │
│  │                   UNDERCURRENTS                            │ │
│  │  Security · Data Management · DataOps · Orchestration     │ │
│  │  Software Engineering · Data Architecture                 │ │
│  └───────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
      </pre></div>

      <h3>Stage 1: Generation</h3>
      <p>Data is generated by source systems — application databases, IoT sensors, APIs, third-party SaaS tools, user events, and logs. As a data engineer, you need to understand the source systems, their schemas, data volumes, and change patterns.</p>

      <h3>Stage 2: Ingestion</h3>
      <p>Moving data from source systems into your data platform. Key decisions include:</p>
      <ul>
        <li><strong>Batch vs Streaming</strong> — Batch for periodic loads, streaming for real-time needs</li>
        <li><strong>Push vs Pull</strong> — Source pushes data vs. you pull from the source</li>
        <li><strong>Full Load vs CDC</strong> — Loading entire tables vs. capturing only changes</li>
      </ul>

      <h3>Stage 3: Transformation</h3>
      <p>Converting raw data into a format suitable for downstream consumption:</p>
      <ul>
        <li>Cleaning & validation</li>
        <li>Joining & enrichment</li>
        <li>Aggregation & summarization</li>
        <li>Feature engineering for ML</li>
      </ul>

      <h3>Stage 4: Serving</h3>
      <p>Making transformed data available for consumption via:</p>
      <ul>
        <li><strong>Analytics</strong> — Dashboards, reports, ad-hoc queries</li>
        <li><strong>Machine Learning</strong> — Feature stores, training datasets</li>
        <li><strong>Reverse ETL</strong> — Pushing data back to operational systems</li>
      </ul>

      <div class="callout tip">
        <div class="callout-title">💡 Pro Tip</div>
        <div class="callout-body">The "Undercurrents" (Security, DataOps, Orchestration, etc.) are equally important as the main stages. A pipeline without proper orchestration or data quality checks will inevitably fail in production.</div>
      </div>
    `
  },

  'etl-vs-elt': {
    id: 'etl-vs-elt',
    title: 'ETL vs ELT Pipelines',
    category: 'Data Engineering Fundamentals',
    tags: ['etl', 'elt', 'airflow', 'pipeline'],
    lastUpdated: '2025-07-15',
    body: `
      <h2>ETL vs ELT Pipelines</h2>
      <p>ETL (Extract, Transform, Load) and ELT (Extract, Load, Transform) are two fundamental approaches to moving and transforming data. The choice between them has significant architectural implications.</p>

      <table>
        <thead><tr><th>Aspect</th><th>ETL</th><th>ELT</th></tr></thead>
        <tbody>
          <tr><td>Transform Location</td><td>External processing engine</td><td>Inside the data warehouse</td></tr>
          <tr><td>Best For</td><td>Legacy systems, sensitive data</td><td>Cloud warehouses, large datasets</td></tr>
          <tr><td>Flexibility</td><td>Limited — schema defined upfront</td><td>High — raw data preserved</td></tr>
          <tr><td>Cost</td><td>Higher compute costs</td><td>Warehouse compute costs</td></tr>
          <tr><td>Tools</td><td>Spark, Informatica, Talend</td><td>dbt, Snowflake, BigQuery</td></tr>
          <tr><td>Latency</td><td>Higher</td><td>Lower for transformations</td></tr>
        </tbody>
      </table>

      <div class="pipeline-flow">
        <div class="pipeline-step">📥 Extract (API/DB)</div>
        <span class="pipeline-arrow">→</span>
        <div class="pipeline-step">🔄 Transform (Spark)</div>
        <span class="pipeline-arrow">→</span>
        <div class="pipeline-step">📤 Load (Warehouse)</div>
      </div>

      <h3>Production Airflow DAG — ETL Pipeline</h3>
      <p>Here's a real-world production Airflow DAG that extracts data from a PostgreSQL source, transforms with PySpark, and loads into BigQuery:</p>

      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-lang">Python</span>
          <button class="code-copy-btn" onclick="copyCode(this)">📋 Copy</button>
        </div>
        <div class="code-content"><pre><span class="cm"># production_etl_dag.py</span>
<span class="cm"># Real-world ETL pipeline with error handling, retries, and Slack alerts</span>

<span class="kw">from</span> datetime <span class="kw">import</span> datetime, timedelta
<span class="kw">from</span> airflow <span class="kw">import</span> DAG
<span class="kw">from</span> airflow.operators.python <span class="kw">import</span> PythonOperator
<span class="kw">from</span> airflow.providers.postgres.hooks.postgres <span class="kw">import</span> PostgresHook
<span class="kw">from</span> airflow.providers.google.cloud.transfers.postgres_to_gcs <span class="kw">import</span> PostgresToGCSOperator
<span class="kw">from</span> airflow.providers.google.cloud.transfers.gcs_to_bigquery <span class="kw">import</span> GCSToBigQueryOperator
<span class="kw">from</span> airflow.providers.slack.operators.slack_webhook <span class="kw">import</span> SlackWebhookOperator
<span class="kw">from</span> airflow.utils.trigger_rule <span class="kw">import</span> TriggerRule

<span class="vr">default_args</span> = {
    <span class="st">'owner'</span>: <span class="st">'data-engineering'</span>,
    <span class="st">'depends_on_past'</span>: <span class="nb">False</span>,
    <span class="st">'email_on_failure'</span>: <span class="nb">True</span>,
    <span class="st">'email'</span>: [<span class="st">'data-team@company.com'</span>],
    <span class="st">'retries'</span>: <span class="nb">3</span>,
    <span class="st">'retry_delay'</span>: timedelta(minutes=<span class="nb">5</span>),
    <span class="st">'retry_exponential_backoff'</span>: <span class="nb">True</span>,
    <span class="st">'max_retry_delay'</span>: timedelta(minutes=<span class="nb">30</span>),
    <span class="st">'execution_timeout'</span>: timedelta(hours=<span class="nb">2</span>),
}

<span class="kw">def</span> <span class="fn">validate_source_data</span>(**kwargs):
    <span class="st">"""Check source DB connectivity and row counts before extraction."""</span>
    hook = PostgresHook(postgres_conn_id=<span class="st">'source_postgres'</span>)
    count = hook.get_first(<span class="st">"SELECT COUNT(*) FROM orders WHERE updated_at >= %s"</span>,
                           parameters=[kwargs[<span class="st">'ds'</span>]])
    <span class="kw">if</span> count[<span class="nb">0</span>] == <span class="nb">0</span>:
        <span class="kw">raise</span> ValueError(<span class="st">f"No new records for {kwargs['ds']}"</span>)
    kwargs[<span class="st">'ti'</span>].xcom_push(key=<span class="st">'source_count'</span>, value=count[<span class="nb">0</span>])
    <span class="kw">return</span> count[<span class="nb">0</span>]

<span class="kw">def</span> <span class="fn">transform_data</span>(**kwargs):
    <span class="st">"""Apply business transformations: currency conversion, deduplication."""</span>
    <span class="kw">from</span> pyspark.sql <span class="kw">import</span> SparkSession
    <span class="kw">from</span> pyspark.sql <span class="kw">import</span> functions <span class="kw">as</span> F

    spark = SparkSession.builder \\
        .appName(<span class="st">f"etl_orders_{kwargs['ds']}"</span>) \\
        .config(<span class="st">"spark.jars"</span>, <span class="st">"/opt/spark/jars/gcs-connector.jar"</span>) \\
        .getOrCreate()

    df = spark.read.parquet(<span class="st">f"gs://raw-data/orders/{kwargs['ds']}/"</span>)

    transformed = df \\
        .dropDuplicates([<span class="st">"order_id"</span>]) \\
        .withColumn(<span class="st">"amount_usd"</span>, F.col(<span class="st">"amount"</span>) * F.col(<span class="st">"exchange_rate"</span>)) \\
        .withColumn(<span class="st">"processed_at"</span>, F.current_timestamp()) \\
        .filter(F.col(<span class="st">"status"</span>).isin([<span class="st">"completed"</span>, <span class="st">"refunded"</span>]))

    transformed.write.mode(<span class="st">"overwrite"</span>).parquet(
        <span class="st">f"gs://processed-data/orders/{kwargs['ds']}/"</span>
    )
    spark.stop()

<span class="kw">def</span> <span class="fn">send_slack_alert</span>(context):
    <span class="st">"""Send Slack notification on pipeline failure."""</span>
    task_instance = context.get(<span class="st">'task_instance'</span>)
    <span class="kw">return</span> SlackWebhookOperator(
        task_id=<span class="st">'slack_alert'</span>,
        slack_webhook_conn_id=<span class="st">'slack_webhook'</span>,
        message=<span class="st">f"""
🚨 *Pipeline Failed*
• DAG: {context['dag'].dag_id}
• Task: {task_instance.task_id}
• Execution: {context['ds']}
• Log: {task_instance.log_url}
        """</span>,
    ).execute(context)

<span class="kw">with</span> DAG(
    dag_id=<span class="st">'production_orders_etl'</span>,
    default_args=default_args,
    description=<span class="st">'Daily ETL: PostgreSQL → GCS → Transform → BigQuery'</span>,
    schedule_interval=<span class="st">'0 6 * * *'</span>,   <span class="cm"># 6 AM UTC daily</span>
    start_date=datetime(<span class="nb">2025</span>, <span class="nb">1</span>, <span class="nb">1</span>),
    catchup=<span class="nb">False</span>,
    tags=[<span class="st">'production'</span>, <span class="st">'etl'</span>, <span class="st">'orders'</span>],
    on_failure_callback=send_slack_alert,
) <span class="kw">as</span> dag:

    validate = PythonOperator(
        task_id=<span class="st">'validate_source'</span>,
        python_callable=validate_source_data,
    )

    extract = PostgresToGCSOperator(
        task_id=<span class="st">'extract_to_gcs'</span>,
        postgres_conn_id=<span class="st">'source_postgres'</span>,
        sql=<span class="st">"SELECT * FROM orders WHERE updated_at >= '{{ ds }}'"</span>,
        bucket=<span class="st">'raw-data'</span>,
        filename=<span class="st">'orders/{{ ds }}/data.parquet'</span>,
        export_format=<span class="st">'parquet'</span>,
    )

    transform = PythonOperator(
        task_id=<span class="st">'transform_data'</span>,
        python_callable=transform_data,
    )

    load = GCSToBigQueryOperator(
        task_id=<span class="st">'load_to_bigquery'</span>,
        bucket=<span class="st">'processed-data'</span>,
        source_objects=[<span class="st">'orders/{{ ds }}/*.parquet'</span>],
        destination_project_dataset_table=<span class="st">'analytics.orders'</span>,
        write_disposition=<span class="st">'WRITE_APPEND'</span>,
        source_format=<span class="st">'PARQUET'</span>,
        autodetect=<span class="nb">True</span>,
    )

    validate >> extract >> transform >> load</pre></div>
      </div>

      <div class="callout tip">
        <div class="callout-title">🔑 Production Best Practices</div>
        <div class="callout-body">
          • Always validate source data before extraction<br>
          • Use exponential backoff for retries<br>
          • Send alerts to Slack/PagerDuty on failure<br>
          • Set execution timeouts to prevent hung tasks<br>
          • Tag DAGs for easier filtering in the Airflow UI
        </div>
      </div>
    `
  },

  'data-modeling': {
    id: 'data-modeling',
    title: 'Data Modeling (Star & Snowflake Schema)',
    category: 'Data Engineering Fundamentals',
    tags: ['modeling', 'star-schema', 'snowflake-schema', 'dimensional'],
    lastUpdated: '2025-07-05',
    body: `
      <h2>Data Modeling for Analytics</h2>
      <p>Data modeling is the process of designing how data is organized and related. For analytical workloads, dimensional modeling (Star & Snowflake schemas) remains the gold standard.</p>

      <h3>Star Schema</h3>
      <p>A star schema consists of a central <strong>fact table</strong> surrounded by <strong>dimension tables</strong>. It's optimized for fast analytical queries.</p>

      <div class="arch-diagram"><pre>
                  ┌─────────────┐
                  │  dim_date   │
                  │─────────────│
                  │ date_key PK │
                  │ full_date   │
                  │ year        │
                  │ quarter     │
                  │ month       │
                  └──────┬──────┘
                         │
┌──────────────┐  ┌──────▼──────────────┐  ┌──────────────┐
│ dim_product  │  │    fact_sales       │  │ dim_customer │
│──────────────│  │─────────────────────│  │──────────────│
│ product_key  │◀─│ product_key FK      │  │ customer_key │
│ product_name │  │ customer_key FK ────│─▶│ name         │
│ category     │  │ date_key FK         │  │ email        │
│ brand        │  │ store_key FK        │  │ segment      │
└──────────────┘  │ quantity            │  └──────────────┘
                  │ unit_price          │
                  │ total_amount        │  ┌──────────────┐
                  │ discount            │  │  dim_store   │
                  └──────┬──────────────┘  │──────────────│
                         └────────────────▶│ store_key    │
                                           │ store_name   │
                                           │ city         │
                                           └──────────────┘
      </pre></div>

      <h3>SQL Example — Creating a Star Schema</h3>
      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-lang">SQL</span>
          <button class="code-copy-btn" onclick="copyCode(this)">📋 Copy</button>
        </div>
        <div class="code-content"><pre><span class="cm">-- Fact table: sales transactions</span>
<span class="kw">CREATE TABLE</span> fact_sales (
    sale_id        <span class="nb">BIGINT</span> <span class="kw">PRIMARY KEY</span>,
    date_key       <span class="nb">INT</span> <span class="kw">REFERENCES</span> dim_date(date_key),
    product_key    <span class="nb">INT</span> <span class="kw">REFERENCES</span> dim_product(product_key),
    customer_key   <span class="nb">INT</span> <span class="kw">REFERENCES</span> dim_customer(customer_key),
    store_key      <span class="nb">INT</span> <span class="kw">REFERENCES</span> dim_store(store_key),
    quantity       <span class="nb">INT</span>,
    unit_price     <span class="nb">DECIMAL</span>(<span class="nb">10</span>,<span class="nb">2</span>),
    total_amount   <span class="nb">DECIMAL</span>(<span class="nb">12</span>,<span class="nb">2</span>),
    discount_pct   <span class="nb">DECIMAL</span>(<span class="nb">5</span>,<span class="nb">2</span>)
);

<span class="cm">-- Analytical query: Monthly sales by category</span>
<span class="kw">SELECT</span>
    d.year,
    d.month,
    p.category,
    <span class="fn">SUM</span>(f.total_amount)  <span class="kw">AS</span> revenue,
    <span class="fn">COUNT</span>(f.sale_id)      <span class="kw">AS</span> num_orders,
    <span class="fn">AVG</span>(f.total_amount)   <span class="kw">AS</span> avg_order_value
<span class="kw">FROM</span> fact_sales f
<span class="kw">JOIN</span> dim_date d    <span class="kw">ON</span> f.date_key = d.date_key
<span class="kw">JOIN</span> dim_product p <span class="kw">ON</span> f.product_key = p.product_key
<span class="kw">WHERE</span> d.year = <span class="nb">2025</span>
<span class="kw">GROUP BY</span> d.year, d.month, p.category
<span class="kw">ORDER BY</span> d.year, d.month, revenue <span class="kw">DESC</span>;</pre></div>
      </div>

      <h3>Star vs Snowflake Schema</h3>
      <table>
        <thead><tr><th>Aspect</th><th>Star Schema</th><th>Snowflake Schema</th></tr></thead>
        <tbody>
          <tr><td>Dimension structure</td><td>Denormalized (flat)</td><td>Normalized (sub-dimensions)</td></tr>
          <tr><td>Query performance</td><td>Faster (fewer joins)</td><td>Slower (more joins)</td></tr>
          <tr><td>Storage</td><td>More redundant data</td><td>Less redundancy</td></tr>
          <tr><td>Maintenance</td><td>Simpler to maintain</td><td>More complex</td></tr>
          <tr><td>Best for</td><td>BI dashboards, analytics</td><td>Large, complex dimensions</td></tr>
        </tbody>
      </table>
    `
  },

  'data-lakes-vs-warehouses': {
    id: 'data-lakes-vs-warehouses',
    title: 'Data Lakes vs Data Warehouses',
    category: 'Data Engineering Fundamentals',
    tags: ['data-lake', 'data-warehouse', 'lakehouse', 'architecture'],
    lastUpdated: '2025-07-06',
    body: `
      <h2>Data Lakes vs Data Warehouses vs Lakehouses</h2>
      <p>Understanding the differences between these storage paradigms is fundamental to designing modern data architectures.</p>

      <table>
        <thead><tr><th>Feature</th><th>Data Lake</th><th>Data Warehouse</th><th>Lakehouse</th></tr></thead>
        <tbody>
          <tr><td>Data Format</td><td>Raw (any format)</td><td>Structured (tables)</td><td>Open formats (Parquet/Delta)</td></tr>
          <tr><td>Schema</td><td>Schema-on-read</td><td>Schema-on-write</td><td>Schema enforcement + evolution</td></tr>
          <tr><td>Use Cases</td><td>ML, data science, archival</td><td>BI, reporting, analytics</td><td>All of the above</td></tr>
          <tr><td>Cost</td><td>Low (object storage)</td><td>High (compute + storage)</td><td>Medium (object storage + engine)</td></tr>
          <tr><td>ACID Transactions</td><td>No</td><td>Yes</td><td>Yes (Delta/Iceberg)</td></tr>
          <tr><td>Performance</td><td>Slow for queries</td><td>Fast for SQL queries</td><td>Fast (with caching/indexing)</td></tr>
        </tbody>
      </table>

      <h3>Modern Lakehouse Architecture</h3>
      <div class="arch-diagram"><pre>
┌─────────────────────────────────────────────────────────┐
│                    LAKEHOUSE ARCHITECTURE                │
│                                                         │
│  ┌─────────────────────────────────────────────────┐    │
│  │            Query Engines & Serving               │    │
│  │  Spark SQL │ Presto │ Trino │ Databricks SQL     │    │
│  └──────────────────────┬──────────────────────────┘    │
│                         │                               │
│  ┌──────────────────────▼──────────────────────────┐    │
│  │           Table Format (Metadata Layer)          │    │
│  │  Delta Lake │ Apache Iceberg │ Apache Hudi       │    │
│  │  ─ ACID transactions  ─ Time travel              │    │
│  │  ─ Schema evolution   ─ Partition pruning        │    │
│  └──────────────────────┬──────────────────────────┘    │
│                         │                               │
│  ┌──────────────────────▼──────────────────────────┐    │
│  │           File Format (Storage Layer)            │    │
│  │  Apache Parquet │ ORC │ Avro                     │    │
│  └──────────────────────┬──────────────────────────┘    │
│                         │                               │
│  ┌──────────────────────▼──────────────────────────┐    │
│  │           Object Storage (Cheap & Durable)       │    │
│  │  Amazon S3 │ Google GCS │ Azure ADLS Gen2        │    │
│  └─────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────┘
      </pre></div>

      <div class="callout important">
        <div class="callout-title">🏗️ Industry Trend</div>
        <div class="callout-body">The Lakehouse pattern (Delta Lake, Apache Iceberg, Apache Hudi) is rapidly becoming the standard. It combines the flexibility and low cost of data lakes with the ACID guarantees and performance of data warehouses.</div>
      </div>
    `
  },

  'batch-vs-stream': {
    id: 'batch-vs-stream',
    title: 'Batch vs Stream Processing',
    category: 'Data Engineering Fundamentals',
    tags: ['batch', 'streaming', 'real-time', 'spark', 'flink'],
    lastUpdated: '2025-07-12',
    body: `
      <h2>Batch vs Stream Processing</h2>
      <p>The choice between batch and stream processing depends on latency requirements, data volume, and complexity of transformations.</p>

      <table>
        <thead><tr><th>Aspect</th><th>Batch Processing</th><th>Stream Processing</th></tr></thead>
        <tbody>
          <tr><td>Latency</td><td>Minutes to hours</td><td>Milliseconds to seconds</td></tr>
          <tr><td>Data Volume</td><td>Large bounded datasets</td><td>Continuous unbounded data</td></tr>
          <tr><td>Complexity</td><td>Simpler to implement</td><td>More complex (windowing, state)</td></tr>
          <tr><td>Use Cases</td><td>Reports, daily ETL, training</td><td>Fraud detection, real-time dashboards</td></tr>
          <tr><td>Tools</td><td>Spark, dbt, Airflow</td><td>Kafka Streams, Flink, Spark Streaming</td></tr>
          <tr><td>Error Handling</td><td>Reprocess entire batch</td><td>Dead letter queues, checkpoints</td></tr>
        </tbody>
      </table>

      <h3>When to Choose What</h3>
      <div class="callout info">
        <div class="callout-title">📋 Decision Framework</div>
        <div class="callout-body">
          <strong>Use Batch when:</strong> Data freshness of hours is acceptable, processing complex joins/aggregations, cost-sensitive workloads<br><br>
          <strong>Use Streaming when:</strong> Sub-second latency required, event-driven architecture, real-time personalization, fraud detection<br><br>
          <strong>Use Micro-Batch when:</strong> Near-real-time (seconds to minutes), Spark Structured Streaming, simpler than true streaming
        </div>
      </div>

      <h3>Lambda vs Kappa Architecture</h3>
      <div class="arch-diagram"><pre>
LAMBDA ARCHITECTURE (Batch + Speed layers)
┌──────────┐    ┌──────────────┐
│          │───▶│ Batch Layer  │──▶ Batch Views
│  Source  │    └──────────────┘
│  Data    │    ┌──────────────┐
│          │───▶│ Speed Layer  │──▶ Real-time Views
└──────────┘    └──────────────┘
                Both merge at ──▶ Serving Layer

KAPPA ARCHITECTURE (Stream-only)
┌──────────┐    ┌──────────────┐
│  Source   │───▶│ Stream Layer │──▶ Serving Layer
│  Data     │    │ (reprocess   │
└──────────┘    │  via replay) │
                └──────────────┘
      </pre></div>
    `
  },

  // ─── 2. APACHE SPARK ────────────────────────────────

  'spark-intro': {
    id: 'spark-intro',
    title: 'PySpark Fundamentals',
    category: 'Apache Spark & Big Data',
    tags: ['spark', 'pyspark', 'big-data', 'distributed'],
    lastUpdated: '2025-07-14',
    body: `
      <h2>PySpark Fundamentals</h2>
      <p>Apache Spark is a unified analytics engine for large-scale data processing. PySpark is the Python API for Spark, enabling distributed data processing with Python.</p>

      <h3>Core Concepts</h3>
      <ul>
        <li><strong>SparkSession</strong> — Entry point to Spark functionality</li>
        <li><strong>DataFrame</strong> — Distributed collection of rows with named columns</li>
        <li><strong>Transformations</strong> — Lazy operations (filter, select, join) that build a DAG</li>
        <li><strong>Actions</strong> — Trigger execution (show, count, collect, write)</li>
        <li><strong>Partitions</strong> — Data divided into chunks for parallel processing</li>
      </ul>

      <h3>Production PySpark Example</h3>
      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-lang">Python</span>
          <button class="code-copy-btn" onclick="copyCode(this)">📋 Copy</button>
        </div>
        <div class="code-content"><pre><span class="cm"># Real-world PySpark ETL: Customer 360 Pipeline</span>
<span class="kw">from</span> pyspark.sql <span class="kw">import</span> SparkSession
<span class="kw">from</span> pyspark.sql <span class="kw">import</span> functions <span class="kw">as</span> F
<span class="kw">from</span> pyspark.sql.window <span class="kw">import</span> Window

spark = SparkSession.builder \\
    .appName(<span class="st">"Customer360Pipeline"</span>) \\
    .config(<span class="st">"spark.sql.adaptive.enabled"</span>, <span class="st">"true"</span>) \\
    .config(<span class="st">"spark.sql.shuffle.partitions"</span>, <span class="st">"200"</span>) \\
    .getOrCreate()

<span class="cm"># Read from multiple sources</span>
orders = spark.read.parquet(<span class="st">"s3://data-lake/raw/orders/"</span>)
customers = spark.read.parquet(<span class="st">"s3://data-lake/raw/customers/"</span>)
events = spark.read.parquet(<span class="st">"s3://data-lake/raw/web_events/"</span>)

<span class="cm"># Aggregate customer purchase history</span>
customer_orders = orders \\
    .groupBy(<span class="st">"customer_id"</span>) \\
    .agg(
        F.count(<span class="st">"order_id"</span>).alias(<span class="st">"total_orders"</span>),
        F.sum(<span class="st">"amount"</span>).alias(<span class="st">"lifetime_value"</span>),
        F.avg(<span class="st">"amount"</span>).alias(<span class="st">"avg_order_value"</span>),
        F.max(<span class="st">"order_date"</span>).alias(<span class="st">"last_order_date"</span>),
        F.min(<span class="st">"order_date"</span>).alias(<span class="st">"first_order_date"</span>),
    )

<span class="cm"># Calculate days since last order with window function</span>
customer_360 = customers \\
    .join(customer_orders, <span class="st">"customer_id"</span>, <span class="st">"left"</span>) \\
    .withColumn(<span class="st">"days_since_last_order"</span>,
        F.datediff(F.current_date(), F.col(<span class="st">"last_order_date"</span>))) \\
    .withColumn(<span class="st">"customer_segment"</span>,
        F.when(F.col(<span class="st">"lifetime_value"</span>) > <span class="nb">10000</span>, <span class="st">"platinum"</span>)
         .when(F.col(<span class="st">"lifetime_value"</span>) > <span class="nb">5000</span>, <span class="st">"gold"</span>)
         .when(F.col(<span class="st">"lifetime_value"</span>) > <span class="nb">1000</span>, <span class="st">"silver"</span>)
         .otherwise(<span class="st">"bronze"</span>)) \\
    .withColumn(<span class="st">"is_churned"</span>,
        F.col(<span class="st">"days_since_last_order"</span>) > <span class="nb">90</span>)

<span class="cm"># Write to Delta Lake with partitioning</span>
customer_360.write \\
    .format(<span class="st">"delta"</span>) \\
    .mode(<span class="st">"overwrite"</span>) \\
    .partitionBy(<span class="st">"customer_segment"</span>) \\
    .save(<span class="st">"s3://data-lake/gold/customer_360/"</span>)

<span class="cm"># Verify output</span>
result = spark.read.format(<span class="st">"delta"</span>).load(<span class="st">"s3://data-lake/gold/customer_360/"</span>)
print(<span class="st">f"Total customers: {result.count()}"</span>)
result.groupBy(<span class="st">"customer_segment"</span>).count().show()</pre></div>
      </div>
    `
  },

  'spark-streaming': {
    id: 'spark-streaming',
    title: 'Spark Structured Streaming',
    category: 'Apache Spark & Big Data',
    tags: ['spark', 'streaming', 'kafka', 'delta-lake', 'real-time'],
    lastUpdated: '2025-07-13',
    body: `
      <h2>Spark Structured Streaming</h2>
      <p>Structured Streaming is a scalable streaming engine built on Spark SQL. It treats live data as a continuously appended table.</p>

      <div class="pipeline-flow">
        <div class="pipeline-step">📡 Kafka Topic</div>
        <span class="pipeline-arrow">→</span>
        <div class="pipeline-step">⚡ Spark Streaming</div>
        <span class="pipeline-arrow">→</span>
        <div class="pipeline-step">🗃️ Delta Lake</div>
        <span class="pipeline-arrow">→</span>
        <div class="pipeline-step">📊 Dashboard</div>
      </div>

      <h3>Real-Time Kafka → Spark → Delta Lake Pipeline</h3>
      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-lang">Python</span>
          <button class="code-copy-btn" onclick="copyCode(this)">📋 Copy</button>
        </div>
        <div class="code-content"><pre><span class="cm"># real_time_events_pipeline.py</span>
<span class="cm"># Reads clickstream events from Kafka, enriches, writes to Delta Lake</span>

<span class="kw">from</span> pyspark.sql <span class="kw">import</span> SparkSession
<span class="kw">from</span> pyspark.sql <span class="kw">import</span> functions <span class="kw">as</span> F
<span class="kw">from</span> pyspark.sql.types <span class="kw">import</span> StructType, StringType, TimestampType, DoubleType

spark = SparkSession.builder \\
    .appName(<span class="st">"RealTimeClickstream"</span>) \\
    .config(<span class="st">"spark.sql.extensions"</span>,
            <span class="st">"io.delta.sql.DeltaSparkSessionExtension"</span>) \\
    .getOrCreate()

<span class="cm"># Define schema for Kafka messages</span>
event_schema = StructType() \\
    .add(<span class="st">"user_id"</span>, StringType()) \\
    .add(<span class="st">"event_type"</span>, StringType()) \\
    .add(<span class="st">"page_url"</span>, StringType()) \\
    .add(<span class="st">"timestamp"</span>, TimestampType()) \\
    .add(<span class="st">"session_id"</span>, StringType()) \\
    .add(<span class="st">"device_type"</span>, StringType())

<span class="cm"># Read from Kafka</span>
kafka_stream = spark.readStream \\
    .format(<span class="st">"kafka"</span>) \\
    .option(<span class="st">"kafka.bootstrap.servers"</span>, <span class="st">"kafka:9092"</span>) \\
    .option(<span class="st">"subscribe"</span>, <span class="st">"clickstream-events"</span>) \\
    .option(<span class="st">"startingOffsets"</span>, <span class="st">"latest"</span>) \\
    .option(<span class="st">"failOnDataLoss"</span>, <span class="st">"false"</span>) \\
    .load()

<span class="cm"># Parse JSON and enrich</span>
parsed = kafka_stream \\
    .select(F.from_json(
        F.col(<span class="st">"value"</span>).cast(<span class="st">"string"</span>), event_schema
    ).alias(<span class="st">"data"</span>)) \\
    .select(<span class="st">"data.*"</span>) \\
    .withColumn(<span class="st">"event_hour"</span>,
        F.date_trunc(<span class="st">"hour"</span>, F.col(<span class="st">"timestamp"</span>))) \\
    .withColumn(<span class="st">"is_conversion"</span>,
        F.col(<span class="st">"event_type"</span>) == <span class="st">"purchase"</span>) \\
    .withWatermark(<span class="st">"timestamp"</span>, <span class="st">"10 minutes"</span>)

<span class="cm"># Write to Delta Lake with auto-compaction</span>
query = parsed.writeStream \\
    .format(<span class="st">"delta"</span>) \\
    .outputMode(<span class="st">"append"</span>) \\
    .option(<span class="st">"checkpointLocation"</span>, <span class="st">"/checkpoints/clickstream"</span>) \\
    .option(<span class="st">"mergeSchema"</span>, <span class="st">"true"</span>) \\
    .partitionBy(<span class="st">"event_hour"</span>) \\
    .trigger(processingTime=<span class="st">"30 seconds"</span>) \\
    .start(<span class="st">"s3://data-lake/silver/clickstream/"</span>)

query.awaitTermination()</pre></div>
      </div>

      <div class="callout warning">
        <div class="callout-title">⚠️ Production Considerations</div>
        <div class="callout-body">
          • Always set <code>failOnDataLoss</code> to false for production Kafka streams<br>
          • Use watermarks to handle late-arriving data<br>
          • Set checkpoint locations on durable storage (S3/GCS), not local disk<br>
          • Monitor <code>query.status</code> and <code>query.recentProgress</code> for lag detection
        </div>
      </div>
    `
  },

  'spark-performance': {
    id: 'spark-performance',
    title: 'Spark Performance Tuning',
    category: 'Apache Spark & Big Data',
    tags: ['spark', 'performance', 'optimization', 'tuning'],
    lastUpdated: '2025-07-09',
    body: `
      <h2>Spark Performance Tuning</h2>
      <p>Production Spark jobs can be 10-100x faster with proper tuning. Here are the most impactful optimizations.</p>

      <h3>Top 10 Performance Tips</h3>
      <table>
        <thead><tr><th>#</th><th>Optimization</th><th>Impact</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Enable Adaptive Query Execution (AQE)</td><td>🟢 High</td></tr>
          <tr><td>2</td><td>Use broadcast joins for small tables</td><td>🟢 High</td></tr>
          <tr><td>3</td><td>Partition data by frequently filtered columns</td><td>🟢 High</td></tr>
          <tr><td>4</td><td>Avoid UDFs — use built-in functions</td><td>🟡 Medium</td></tr>
          <tr><td>5</td><td>Cache/persist intermediate DataFrames</td><td>🟡 Medium</td></tr>
          <tr><td>6</td><td>Right-size shuffle partitions</td><td>🟡 Medium</td></tr>
          <tr><td>7</td><td>Use columnar formats (Parquet/ORC)</td><td>🟢 High</td></tr>
          <tr><td>8</td><td>Avoid data skew with salting</td><td>🟡 Medium</td></tr>
          <tr><td>9</td><td>Minimize driver collect()</td><td>🟡 Medium</td></tr>
          <tr><td>10</td><td>Use Delta Lake Z-Ordering</td><td>🟢 High</td></tr>
        </tbody>
      </table>

      <h3>Configuration Template</h3>
      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-lang">Python</span>
          <button class="code-copy-btn" onclick="copyCode(this)">📋 Copy</button>
        </div>
        <div class="code-content"><pre><span class="cm"># Production Spark performance configuration</span>
spark = SparkSession.builder \\
    .appName(<span class="st">"OptimizedPipeline"</span>) \\
    <span class="cm"># Adaptive Query Execution</span>
    .config(<span class="st">"spark.sql.adaptive.enabled"</span>, <span class="st">"true"</span>) \\
    .config(<span class="st">"spark.sql.adaptive.coalescePartitions.enabled"</span>, <span class="st">"true"</span>) \\
    .config(<span class="st">"spark.sql.adaptive.skewJoin.enabled"</span>, <span class="st">"true"</span>) \\
    <span class="cm"># Shuffle optimization</span>
    .config(<span class="st">"spark.sql.shuffle.partitions"</span>, <span class="st">"auto"</span>) \\
    .config(<span class="st">"spark.sql.files.maxPartitionBytes"</span>, <span class="st">"128m"</span>) \\
    <span class="cm"># Memory management</span>
    .config(<span class="st">"spark.executor.memory"</span>, <span class="st">"8g"</span>) \\
    .config(<span class="st">"spark.executor.memoryOverhead"</span>, <span class="st">"2g"</span>) \\
    .config(<span class="st">"spark.memory.fraction"</span>, <span class="st">"0.8"</span>) \\
    <span class="cm"># Serialization</span>
    .config(<span class="st">"spark.serializer"</span>,
            <span class="st">"org.apache.spark.serializer.KryoSerializer"</span>) \\
    <span class="cm"># Broadcast threshold (10MB)</span>
    .config(<span class="st">"spark.sql.autoBroadcastJoinThreshold"</span>, <span class="st">"10485760"</span>) \\
    .getOrCreate()

<span class="cm"># Example: Broadcast join for small dimension table</span>
<span class="kw">from</span> pyspark.sql <span class="kw">import</span> functions <span class="kw">as</span> F

large_fact = spark.read.parquet(<span class="st">"s3://data/fact_events/"</span>)   <span class="cm"># 500M rows</span>
small_dim  = spark.read.parquet(<span class="st">"s3://data/dim_products/"</span>)  <span class="cm"># 10K rows</span>

<span class="cm"># Force broadcast join</span>
result = large_fact.join(
    F.broadcast(small_dim),
    <span class="st">"product_id"</span>,
    <span class="st">"inner"</span>
)</pre></div>
      </div>
    `
  },

  'delta-lake': {
    id: 'delta-lake',
    title: 'Delta Lake & Lakehouse Architecture',
    category: 'Apache Spark & Big Data',
    tags: ['delta-lake', 'lakehouse', 'iceberg', 'acid'],
    lastUpdated: '2025-07-11',
    body: `
      <h2>Delta Lake & Lakehouse</h2>
      <p>Delta Lake brings ACID transactions, scalable metadata handling, and time travel to data lakes. It's the foundation of the Lakehouse architecture.</p>

      <h3>Key Features</h3>
      <ul>
        <li><strong>ACID Transactions</strong> — Serializable isolation for concurrent reads/writes</li>
        <li><strong>Time Travel</strong> — Query previous versions of data with <code>VERSION AS OF</code></li>
        <li><strong>Schema Enforcement</strong> — Prevent bad data from corrupting tables</li>
        <li><strong>Schema Evolution</strong> — Add columns without rewriting existing data</li>
        <li><strong>Z-Ordering</strong> — Co-locate related data for faster queries</li>
        <li><strong>Change Data Feed</strong> — Track row-level changes between versions</li>
      </ul>

      <h3>Delta Lake MERGE Example (Upserts)</h3>
      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-lang">Python</span>
          <button class="code-copy-btn" onclick="copyCode(this)">📋 Copy</button>
        </div>
        <div class="code-content"><pre><span class="cm"># Delta Lake MERGE for CDC (Change Data Capture) upserts</span>
<span class="kw">from</span> delta.tables <span class="kw">import</span> DeltaTable
<span class="kw">from</span> pyspark.sql <span class="kw">import</span> functions <span class="kw">as</span> F

<span class="cm"># Read incoming CDC events</span>
new_data = spark.read.parquet(<span class="st">"s3://raw/cdc_events/2025-07-15/"</span>)

<span class="cm"># Load existing Delta table</span>
target = DeltaTable.forPath(spark, <span class="st">"s3://gold/customers/"</span>)

<span class="cm"># Perform MERGE (upsert)</span>
target.alias(<span class="st">"target"</span>).merge(
    new_data.alias(<span class="st">"source"</span>),
    <span class="st">"target.customer_id = source.customer_id"</span>
).whenMatchedUpdate(
    condition=<span class="st">"source.updated_at > target.updated_at"</span>,
    set={
        <span class="st">"name"</span>: <span class="st">"source.name"</span>,
        <span class="st">"email"</span>: <span class="st">"source.email"</span>,
        <span class="st">"updated_at"</span>: <span class="st">"source.updated_at"</span>,
    }
).whenNotMatchedInsertAll().execute()

<span class="cm"># Time Travel: query previous version</span>
previous = spark.read.format(<span class="st">"delta"</span>) \\
    .option(<span class="st">"versionAsOf"</span>, <span class="nb">5</span>) \\
    .load(<span class="st">"s3://gold/customers/"</span>)

<span class="cm"># Optimize with Z-Ordering</span>
target.optimize().executeZOrderBy(<span class="st">"customer_id"</span>, <span class="st">"region"</span>)

<span class="cm"># Vacuum old files (retain 7 days)</span>
target.vacuum(retentionHours=<span class="nb">168</span>)</pre></div>
      </div>
    `
  },

  // ─── 3. APACHE KAFKA ───────────────────────────────

  'kafka-architecture': {
    id: 'kafka-architecture',
    title: 'Kafka Architecture Deep Dive',
    category: 'Apache Kafka & Streaming',
    tags: ['kafka', 'architecture', 'streaming', 'event-driven'],
    lastUpdated: '2025-07-14',
    body: `
      <h2>Apache Kafka Architecture</h2>
      <p>Apache Kafka is a distributed event streaming platform capable of handling trillions of events per day. Understanding its architecture is key to building reliable streaming pipelines.</p>

      <div class="arch-diagram"><pre>
┌────────────────────────────────────────────────────────────┐
│                    KAFKA CLUSTER                           │
│                                                            │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  Topic: "orders" (3 partitions, RF=3)                │  │
│  │                                                      │  │
│  │  Broker 1         Broker 2         Broker 3          │  │
│  │  ┌──────────┐    ┌──────────┐    ┌──────────┐       │  │
│  │  │ P0 (L)   │    │ P0 (F)   │    │ P0 (F)   │       │  │
│  │  │ P1 (F)   │    │ P1 (L)   │    │ P1 (F)   │       │  │
│  │  │ P2 (F)   │    │ P2 (F)   │    │ P2 (L)   │       │  │
│  │  └──────────┘    └──────────┘    └──────────┘       │  │
│  │  L = Leader, F = Follower                            │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                            │
│  Producers ──▶ [Topic Partitions] ──▶ Consumer Groups      │
│                                                            │
│  ZooKeeper / KRaft (metadata management)                   │
└────────────────────────────────────────────────────────────┘
      </pre></div>

      <h3>Key Concepts</h3>
      <table>
        <thead><tr><th>Concept</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td><strong>Topic</strong></td><td>Named stream of records. Similar to a table in a database.</td></tr>
          <tr><td><strong>Partition</strong></td><td>Ordered, immutable sequence of records within a topic. Enables parallelism.</td></tr>
          <tr><td><strong>Offset</strong></td><td>Unique ID for each record within a partition.</td></tr>
          <tr><td><strong>Broker</strong></td><td>A Kafka server that stores data and serves clients.</td></tr>
          <tr><td><strong>Consumer Group</strong></td><td>Set of consumers that cooperate to consume a topic. Each partition is read by exactly one consumer in the group.</td></tr>
          <tr><td><strong>Replication Factor</strong></td><td>Number of copies of each partition across brokers.</td></tr>
          <tr><td><strong>Leader/Follower</strong></td><td>Each partition has one leader (handles reads/writes) and N-1 followers (replicas).</td></tr>
        </tbody>
      </table>

      <h3>Kafka Guarantees</h3>
      <div class="callout info">
        <div class="callout-title">📋 Delivery Semantics</div>
        <div class="callout-body">
          <strong>At-most-once:</strong> Messages may be lost, never redelivered (auto-commit)<br>
          <strong>At-least-once:</strong> Messages never lost, may be duplicated (manual commit)<br>
          <strong>Exactly-once:</strong> Messages delivered exactly once (idempotent producer + transactional API)
        </div>
      </div>
    `
  },

  'kafka-python': {
    id: 'kafka-python',
    title: 'Kafka Producers & Consumers (Python)',
    category: 'Apache Kafka & Streaming',
    tags: ['kafka', 'python', 'producer', 'consumer'],
    lastUpdated: '2025-07-15',
    body: `
      <h2>Kafka Producers & Consumers in Python</h2>
      <p>Building reliable Kafka producers and consumers with the <code>confluent-kafka</code> Python library.</p>

      <h3>Production Kafka Producer</h3>
      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-lang">Python</span>
          <button class="code-copy-btn" onclick="copyCode(this)">📋 Copy</button>
        </div>
        <div class="code-content"><pre><span class="cm"># kafka_producer.py — Production Kafka producer with error handling</span>
<span class="kw">import</span> json
<span class="kw">import</span> logging
<span class="kw">from</span> datetime <span class="kw">import</span> datetime
<span class="kw">from</span> confluent_kafka <span class="kw">import</span> Producer, KafkaError
<span class="kw">from</span> confluent_kafka.serialization <span class="kw">import</span> SerializationContext, MessageField

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

<span class="kw">class</span> <span class="dc">OrderEventProducer</span>:
    <span class="st">"""Production-grade Kafka producer for order events."""</span>

    <span class="kw">def</span> <span class="fn">__init__</span>(self, bootstrap_servers: str, topic: str):
        self.topic = topic
        self.producer = Producer({
            <span class="st">'bootstrap.servers'</span>: bootstrap_servers,
            <span class="st">'acks'</span>: <span class="st">'all'</span>,                <span class="cm"># Wait for all replicas</span>
            <span class="st">'retries'</span>: <span class="nb">5</span>,
            <span class="st">'retry.backoff.ms'</span>: <span class="nb">1000</span>,
            <span class="st">'enable.idempotence'</span>: <span class="nb">True</span>,  <span class="cm"># Exactly-once semantics</span>
            <span class="st">'compression.type'</span>: <span class="st">'snappy'</span>,
            <span class="st">'linger.ms'</span>: <span class="nb">50</span>,             <span class="cm"># Batch for 50ms</span>
            <span class="st">'batch.size'</span>: <span class="nb">65536</span>,         <span class="cm"># 64KB batch size</span>
        })
        self._delivery_count = <span class="nb">0</span>
        self._error_count = <span class="nb">0</span>

    <span class="kw">def</span> <span class="fn">_delivery_callback</span>(self, err, msg):
        <span class="kw">if</span> err:
            self._error_count += <span class="nb">1</span>
            logger.error(<span class="st">f"Delivery failed: {err}"</span>)
        <span class="kw">else</span>:
            self._delivery_count += <span class="nb">1</span>
            logger.debug(<span class="st">f"Delivered to {msg.topic()}[{msg.partition()}]"</span>)

    <span class="kw">def</span> <span class="fn">send_order_event</span>(self, order_id, customer_id, amount, items):
        event = {
            <span class="st">"order_id"</span>: order_id,
            <span class="st">"customer_id"</span>: customer_id,
            <span class="st">"amount"</span>: amount,
            <span class="st">"items"</span>: items,
            <span class="st">"timestamp"</span>: datetime.utcnow().isoformat(),
            <span class="st">"event_type"</span>: <span class="st">"order_created"</span>,
        }
        self.producer.produce(
            topic=self.topic,
            key=str(order_id).encode(<span class="st">'utf-8'</span>),
            value=json.dumps(event).encode(<span class="st">'utf-8'</span>),
            callback=self._delivery_callback,
        )
        self.producer.poll(<span class="nb">0</span>)  <span class="cm"># Trigger delivery callbacks</span>

    <span class="kw">def</span> <span class="fn">flush</span>(self):
        self.producer.flush(timeout=<span class="nb">30</span>)
        logger.info(<span class="st">f"Delivered: {self._delivery_count}, Errors: {self._error_count}"</span>)

<span class="cm"># Usage</span>
producer = OrderEventProducer(<span class="st">"kafka-broker:9092"</span>, <span class="st">"order-events"</span>)
producer.send_order_event(<span class="st">"ORD-12345"</span>, <span class="st">"CUST-789"</span>, <span class="nb">149.99</span>, [<span class="st">"item1"</span>, <span class="st">"item2"</span>])
producer.flush()</pre></div>
      </div>

      <h3>Production Kafka Consumer</h3>
      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-lang">Python</span>
          <button class="code-copy-btn" onclick="copyCode(this)">📋 Copy</button>
        </div>
        <div class="code-content"><pre><span class="cm"># kafka_consumer.py — Production consumer with error handling & graceful shutdown</span>
<span class="kw">import</span> json, signal, logging
<span class="kw">from</span> confluent_kafka <span class="kw">import</span> Consumer, KafkaError

logger = logging.getLogger(__name__)

<span class="kw">class</span> <span class="dc">OrderEventConsumer</span>:
    <span class="kw">def</span> <span class="fn">__init__</span>(self, bootstrap_servers, group_id, topics):
        self.consumer = Consumer({
            <span class="st">'bootstrap.servers'</span>: bootstrap_servers,
            <span class="st">'group.id'</span>: group_id,
            <span class="st">'auto.offset.reset'</span>: <span class="st">'earliest'</span>,
            <span class="st">'enable.auto.commit'</span>: <span class="nb">False</span>,  <span class="cm"># Manual commit</span>
            <span class="st">'max.poll.interval.ms'</span>: <span class="nb">300000</span>,
            <span class="st">'session.timeout.ms'</span>: <span class="nb">45000</span>,
        })
        self.consumer.subscribe(topics)
        self._running = <span class="nb">True</span>
        signal.signal(signal.SIGTERM, self._shutdown)

    <span class="kw">def</span> <span class="fn">_shutdown</span>(self, *args):
        logger.info(<span class="st">"Graceful shutdown initiated..."</span>)
        self._running = <span class="nb">False</span>

    <span class="kw">def</span> <span class="fn">process_message</span>(self, message):
        <span class="st">"""Business logic: process the order event."""</span>
        event = json.loads(message.value().decode(<span class="st">'utf-8'</span>))
        logger.info(<span class="st">f"Processing order {event['order_id']}: \${event['amount']}"</span>)
        <span class="cm"># Insert to database, update cache, trigger notifications...</span>
        <span class="kw">return</span> <span class="nb">True</span>

    <span class="kw">def</span> <span class="fn">run</span>(self):
        <span class="kw">try</span>:
            <span class="kw">while</span> self._running:
                msg = self.consumer.poll(timeout=<span class="nb">1.0</span>)
                <span class="kw">if</span> msg <span class="kw">is</span> <span class="nb">None</span>:
                    <span class="kw">continue</span>
                <span class="kw">if</span> msg.error():
                    <span class="kw">if</span> msg.error().code() == KafkaError._PARTITION_EOF:
                        <span class="kw">continue</span>
                    logger.error(<span class="st">f"Consumer error: {msg.error()}"</span>)
                    <span class="kw">continue</span>

                <span class="kw">if</span> self.process_message(msg):
                    self.consumer.commit(asynchronous=<span class="nb">False</span>)
        <span class="kw">finally</span>:
            self.consumer.close()

consumer = OrderEventConsumer(<span class="st">"kafka:9092"</span>, <span class="st">"order-processors"</span>, [<span class="st">"order-events"</span>])
consumer.run()</pre></div>
      </div>
    `
  },

  'kafka-connect': {
    id: 'kafka-connect',
    title: 'Kafka Connect & Schema Registry',
    category: 'Apache Kafka & Streaming',
    tags: ['kafka', 'connect', 'schema-registry', 'debezium', 'cdc'],
    lastUpdated: '2025-07-10',
    body: `
      <h2>Kafka Connect & Schema Registry</h2>
      <p>Kafka Connect is a framework for streaming data between Kafka and external systems without writing code. Schema Registry manages Avro/Protobuf schemas for type safety.</p>

      <h3>Debezium CDC Connector — Capture Database Changes</h3>
      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-lang">JSON</span>
          <button class="code-copy-btn" onclick="copyCode(this)">📋 Copy</button>
        </div>
        <div class="code-content"><pre>{
  <span class="st">"name"</span>: <span class="st">"postgres-cdc-connector"</span>,
  <span class="st">"config"</span>: {
    <span class="st">"connector.class"</span>: <span class="st">"io.debezium.connector.postgresql.PostgresConnector"</span>,
    <span class="st">"database.hostname"</span>: <span class="st">"postgres-primary"</span>,
    <span class="st">"database.port"</span>: <span class="st">"5432"</span>,
    <span class="st">"database.user"</span>: <span class="st">"cdc_user"</span>,
    <span class="st">"database.password"</span>: <span class="st">"\${secrets:postgres/cdc-password}"</span>,
    <span class="st">"database.dbname"</span>: <span class="st">"production_db"</span>,
    <span class="st">"database.server.name"</span>: <span class="st">"prod"</span>,
    <span class="st">"table.include.list"</span>: <span class="st">"public.orders,public.customers"</span>,
    <span class="st">"plugin.name"</span>: <span class="st">"pgoutput"</span>,
    <span class="st">"slot.name"</span>: <span class="st">"debezium_slot"</span>,
    <span class="st">"publication.name"</span>: <span class="st">"cdc_publication"</span>,
    <span class="st">"key.converter"</span>: <span class="st">"io.confluent.connect.avro.AvroConverter"</span>,
    <span class="st">"value.converter"</span>: <span class="st">"io.confluent.connect.avro.AvroConverter"</span>,
    <span class="st">"key.converter.schema.registry.url"</span>: <span class="st">"http://schema-registry:8081"</span>,
    <span class="st">"value.converter.schema.registry.url"</span>: <span class="st">"http://schema-registry:8081"</span>,
    <span class="st">"transforms"</span>: <span class="st">"route"</span>,
    <span class="st">"transforms.route.type"</span>: <span class="st">"org.apache.kafka.connect.transforms.RegexRouter"</span>,
    <span class="st">"transforms.route.regex"</span>: <span class="st">"prod.public.(.*)"</span>,
    <span class="st">"transforms.route.replacement"</span>: <span class="st">"cdc.$1"</span>,
    <span class="st">"errors.tolerance"</span>: <span class="st">"all"</span>,
    <span class="st">"errors.deadletterqueue.topic.name"</span>: <span class="st">"cdc-dlq"</span>
  }
}</pre></div>
      </div>

      <div class="callout tip">
        <div class="callout-title">💡 Pro Tip: Schema Evolution</div>
        <div class="callout-body">With Schema Registry, you can evolve your schemas (add fields, change types) while maintaining backward compatibility. Use <code>BACKWARD</code> compatibility mode for consumers and <code>FORWARD</code> for producers.</div>
      </div>
    `
  },

  'kafka-event-pipeline': {
    id: 'kafka-event-pipeline',
    title: 'Real-time Event-Driven Pipeline',
    category: 'Apache Kafka & Streaming',
    tags: ['kafka', 'event-driven', 'microservices', 'pipeline'],
    lastUpdated: '2025-07-16',
    body: `
      <h2>Real-time Event-Driven Pipeline</h2>
      <p>A production event-driven architecture using Kafka as the central nervous system, connecting microservices for order processing, fraud detection, and notifications.</p>

      <div class="arch-diagram"><pre>
┌──────────┐    ┌──────────────────────────────────────┐    ┌──────────────┐
│  Web App │───▶│          KAFKA CLUSTER                │───▶│  Analytics   │
│  Mobile  │    │                                      │    │  (BigQuery)  │
└──────────┘    │  ┌──────────────┐  ┌──────────────┐  │    └──────────────┘
                │  │ order-events │  │ payment-events│  │
                │  └──────┬───────┘  └───────┬──────┘  │    ┌──────────────┐
                │         │                  │         │───▶│  ML Scoring  │
                │  ┌──────▼───────┐  ┌───────▼──────┐  │    │  (SageMaker) │
                │  │ fraud-scores │  │ notifications│  │    └──────────────┘
                │  └──────────────┘  └──────────────┘  │
                └──────────────────────────────────────┘    ┌──────────────┐
                                                       ├───▶│  Email/SMS   │
                                                            │  (SendGrid)  │
                                                            └──────────────┘
      </pre></div>

      <div class="pipeline-flow">
        <div class="pipeline-step">🛒 Order Placed</div>
        <span class="pipeline-arrow">→</span>
        <div class="pipeline-step">🔍 Fraud Check</div>
        <span class="pipeline-arrow">→</span>
        <div class="pipeline-step">💳 Payment</div>
        <span class="pipeline-arrow">→</span>
        <div class="pipeline-step">📦 Fulfillment</div>
        <span class="pipeline-arrow">→</span>
        <div class="pipeline-step">📧 Notification</div>
      </div>

      <h3>Docker Compose — Full Kafka Stack</h3>
      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-lang">YAML</span>
          <button class="code-copy-btn" onclick="copyCode(this)">📋 Copy</button>
        </div>
        <div class="code-content"><pre><span class="cm"># docker-compose.yml — Production Kafka stack</span>
<span class="at">version</span>: <span class="st">"3.9"</span>
<span class="at">services</span>:
  <span class="at">kafka</span>:
    <span class="at">image</span>: <span class="st">confluentinc/cp-kafka:7.5.0</span>
    <span class="at">ports</span>:
      - <span class="st">"9092:9092"</span>
    <span class="at">environment</span>:
      <span class="at">KAFKA_NODE_ID</span>: <span class="nb">1</span>
      <span class="at">KAFKA_PROCESS_ROLES</span>: <span class="st">"broker,controller"</span>
      <span class="at">KAFKA_CONTROLLER_QUORUM_VOTERS</span>: <span class="st">"1@kafka:9093"</span>
      <span class="at">KAFKA_LISTENERS</span>: <span class="st">"PLAINTEXT://:9092,CONTROLLER://:9093"</span>
      <span class="at">KAFKA_LOG_RETENTION_HOURS</span>: <span class="nb">168</span>
      <span class="at">KAFKA_NUM_PARTITIONS</span>: <span class="nb">6</span>
      <span class="at">KAFKA_DEFAULT_REPLICATION_FACTOR</span>: <span class="nb">1</span>

  <span class="at">schema-registry</span>:
    <span class="at">image</span>: <span class="st">confluentinc/cp-schema-registry:7.5.0</span>
    <span class="at">ports</span>:
      - <span class="st">"8081:8081"</span>
    <span class="at">environment</span>:
      <span class="at">SCHEMA_REGISTRY_KAFKASTORE_BOOTSTRAP_SERVERS</span>: <span class="st">"kafka:9092"</span>

  <span class="at">kafka-ui</span>:
    <span class="at">image</span>: <span class="st">provectuslabs/kafka-ui:latest</span>
    <span class="at">ports</span>:
      - <span class="st">"8080:8080"</span>
    <span class="at">environment</span>:
      <span class="at">KAFKA_CLUSTERS_0_NAME</span>: <span class="st">"local"</span>
      <span class="at">KAFKA_CLUSTERS_0_BOOTSTRAPSERVERS</span>: <span class="st">"kafka:9092"</span>
      <span class="at">KAFKA_CLUSTERS_0_SCHEMAREGISTRY</span>: <span class="st">"http://schema-registry:8081"</span></pre></div>
      </div>
    `
  },

  // ─── 4. APACHE AIRFLOW ─────────────────────────────

  'airflow-dag-patterns': {
    id: 'airflow-dag-patterns',
    title: 'Airflow DAG Patterns',
    category: 'Apache Airflow & Orchestration',
    tags: ['airflow', 'dag', 'patterns', 'orchestration'],
    lastUpdated: '2025-07-14',
    body: `
      <h2>Production Airflow DAG Patterns</h2>
      <p>Battle-tested patterns for building reliable, maintainable Airflow DAGs in production environments.</p>

      <h3>Pattern 1: TaskFlow API (Modern Airflow)</h3>
      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-lang">Python</span>
          <button class="code-copy-btn" onclick="copyCode(this)">📋 Copy</button>
        </div>
        <div class="code-content"><pre><span class="cm"># Modern Airflow DAG using TaskFlow API (Airflow 2.x+)</span>
<span class="kw">from</span> airflow.decorators <span class="kw">import</span> dag, task
<span class="kw">from</span> datetime <span class="kw">import</span> datetime
<span class="kw">import</span> pandas <span class="kw">as</span> pd

<span class="dc">@dag</span>(
    dag_id=<span class="st">"daily_revenue_report"</span>,
    schedule=<span class="st">"0 8 * * *"</span>,
    start_date=datetime(<span class="nb">2025</span>, <span class="nb">1</span>, <span class="nb">1</span>),
    catchup=<span class="nb">False</span>,
    tags=[<span class="st">"analytics"</span>, <span class="st">"revenue"</span>],
    doc_md=<span class="st">"""
    ## Daily Revenue Report
    Generates daily revenue summary and sends to Slack.
    """</span>,
)
<span class="kw">def</span> <span class="fn">daily_revenue_report</span>():

    <span class="dc">@task</span>()
    <span class="kw">def</span> <span class="fn">extract_orders</span>(ds=<span class="nb">None</span>):
        <span class="st">"""Pull orders from the warehouse."""</span>
        <span class="kw">from</span> airflow.providers.postgres.hooks.postgres <span class="kw">import</span> PostgresHook
        hook = PostgresHook(<span class="st">"warehouse_postgres"</span>)
        df = hook.get_pandas_df(
            <span class="st">f"SELECT * FROM fact_orders WHERE order_date = '{ds}'"</span>
        )
        <span class="kw">return</span> df.to_dict()

    <span class="dc">@task</span>()
    <span class="kw">def</span> <span class="fn">compute_metrics</span>(orders_dict):
        <span class="st">"""Calculate revenue metrics."""</span>
        df = pd.DataFrame(orders_dict)
        <span class="kw">return</span> {
            <span class="st">"total_revenue"</span>: float(df[<span class="st">"amount"</span>].sum()),
            <span class="st">"order_count"</span>: len(df),
            <span class="st">"avg_order_value"</span>: float(df[<span class="st">"amount"</span>].mean()),
            <span class="st">"top_product"</span>: df[<span class="st">"product"</span>].mode()[<span class="nb">0</span>],
        }

    <span class="dc">@task</span>()
    <span class="kw">def</span> <span class="fn">send_report</span>(metrics, ds=<span class="nb">None</span>):
        <span class="st">"""Send Slack summary."""</span>
        <span class="kw">from</span> airflow.providers.slack.hooks.slack_webhook <span class="kw">import</span> SlackWebhookHook
        hook = SlackWebhookHook(slack_webhook_conn_id=<span class="st">"slack"</span>)
        hook.send(text=<span class="st">f"""
📊 *Daily Revenue Report — {ds}*
💰 Revenue: \${metrics['total_revenue']:,.2f}
📦 Orders: {metrics['order_count']}
📈 AOV: \${metrics['avg_order_value']:,.2f}
🏆 Top Product: {metrics['top_product']}
        """</span>)

    orders = extract_orders()
    metrics = compute_metrics(orders)
    send_report(metrics)

daily_revenue_report()</pre></div>
      </div>

      <h3>Pattern 2: Dynamic Task Mapping</h3>
      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-lang">Python</span>
          <button class="code-copy-btn" onclick="copyCode(this)">📋 Copy</button>
        </div>
        <div class="code-content"><pre><span class="cm"># Dynamic task mapping — process multiple tables in parallel</span>
<span class="dc">@task</span>()
<span class="kw">def</span> <span class="fn">get_tables_to_sync</span>():
    <span class="kw">return</span> [<span class="st">"users"</span>, <span class="st">"orders"</span>, <span class="st">"products"</span>, <span class="st">"payments"</span>]

<span class="dc">@task</span>()
<span class="kw">def</span> <span class="fn">sync_table</span>(table_name):
    <span class="st">"""Sync a single table from source to warehouse."""</span>
    logger.info(<span class="st">f"Syncing table: {table_name}"</span>)
    <span class="cm"># ... extraction and loading logic</span>

<span class="cm"># This creates parallel tasks for each table dynamically!</span>
tables = get_tables_to_sync()
sync_table.expand(table_name=tables)</pre></div>
      </div>
    `
  },

  'airflow-dynamic-dags': {
    id: 'airflow-dynamic-dags',
    title: 'Dynamic DAG Generation',
    category: 'Apache Airflow & Orchestration',
    tags: ['airflow', 'dynamic', 'dag-factory', 'yaml'],
    lastUpdated: '2025-07-11',
    body: `
      <h2>Dynamic DAG Generation</h2>
      <p>Generate DAGs dynamically from configuration files to avoid code duplication across similar pipelines.</p>

      <h3>YAML-Driven DAG Factory</h3>
      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-lang">YAML</span>
          <button class="code-copy-btn" onclick="copyCode(this)">📋 Copy</button>
        </div>
        <div class="code-content"><pre><span class="cm"># config/pipelines.yaml</span>
<span class="at">pipelines</span>:
  - <span class="at">name</span>: <span class="st">sync_users</span>
    <span class="at">source_table</span>: <span class="st">public.users</span>
    <span class="at">destination</span>: <span class="st">analytics.dim_users</span>
    <span class="at">schedule</span>: <span class="st">"0 */2 * * *"</span>
    <span class="at">mode</span>: <span class="st">incremental</span>

  - <span class="at">name</span>: <span class="st">sync_orders</span>
    <span class="at">source_table</span>: <span class="st">public.orders</span>
    <span class="at">destination</span>: <span class="st">analytics.fact_orders</span>
    <span class="at">schedule</span>: <span class="st">"*/30 * * * *"</span>
    <span class="at">mode</span>: <span class="st">incremental</span>

  - <span class="at">name</span>: <span class="st">sync_products</span>
    <span class="at">source_table</span>: <span class="st">public.products</span>
    <span class="at">destination</span>: <span class="st">analytics.dim_products</span>
    <span class="at">schedule</span>: <span class="st">"0 6 * * *"</span>
    <span class="at">mode</span>: <span class="st">full_refresh</span></pre></div>
      </div>

      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-lang">Python</span>
          <button class="code-copy-btn" onclick="copyCode(this)">📋 Copy</button>
        </div>
        <div class="code-content"><pre><span class="cm"># dags/dag_factory.py — Generate DAGs from YAML config</span>
<span class="kw">import</span> yaml
<span class="kw">from</span> pathlib <span class="kw">import</span> Path
<span class="kw">from</span> airflow <span class="kw">import</span> DAG
<span class="kw">from</span> airflow.decorators <span class="kw">import</span> task
<span class="kw">from</span> datetime <span class="kw">import</span> datetime

config_path = Path(__file__).parent.parent / <span class="st">"config/pipelines.yaml"</span>
<span class="kw">with</span> open(config_path) <span class="kw">as</span> f:
    config = yaml.safe_load(f)

<span class="kw">def</span> <span class="fn">create_sync_dag</span>(pipeline_config):
    dag_id = <span class="st">f"sync_{pipeline_config['name']}"</span>

    <span class="kw">with</span> DAG(
        dag_id=dag_id,
        schedule=pipeline_config[<span class="st">'schedule'</span>],
        start_date=datetime(<span class="nb">2025</span>, <span class="nb">1</span>, <span class="nb">1</span>),
        catchup=<span class="nb">False</span>,
        tags=[<span class="st">"sync"</span>, <span class="st">"auto-generated"</span>],
    ) <span class="kw">as</span> dag:

        <span class="dc">@task</span>(task_id=<span class="st">"extract"</span>)
        <span class="kw">def</span> <span class="fn">extract</span>(**kwargs):
            <span class="cm"># Extract from source_table</span>
            <span class="kw">pass</span>

        <span class="dc">@task</span>(task_id=<span class="st">"load"</span>)
        <span class="kw">def</span> <span class="fn">load</span>(data, **kwargs):
            <span class="cm"># Load to destination</span>
            <span class="kw">pass</span>

        data = extract()
        load(data)

    <span class="kw">return</span> dag

<span class="cm"># Generate a DAG for each pipeline in config</span>
<span class="kw">for</span> pipeline <span class="kw">in</span> config[<span class="st">'pipelines'</span>]:
    globals()[<span class="st">f"sync_{pipeline['name']}"</span>] = create_sync_dag(pipeline)</pre></div>
      </div>
    `
  },

  'airflow-docker-k8s': {
    id: 'airflow-docker-k8s',
    title: 'Airflow with Docker & Kubernetes',
    category: 'Apache Airflow & Orchestration',
    tags: ['airflow', 'docker', 'kubernetes', 'helm'],
    lastUpdated: '2025-07-07',
    body: `
      <h2>Airflow with Docker & Kubernetes</h2>
      <p>Deploying production Airflow with Docker Compose for development and Kubernetes for production.</p>

      <h3>Docker Compose (Local Development)</h3>
      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-lang">YAML</span>
          <button class="code-copy-btn" onclick="copyCode(this)">📋 Copy</button>
        </div>
        <div class="code-content"><pre><span class="cm"># docker-compose.yml for local Airflow development</span>
<span class="at">version</span>: <span class="st">"3.8"</span>
<span class="at">x-airflow-common</span>: <span class="at">&airflow-common</span>
  <span class="at">image</span>: <span class="st">apache/airflow:2.8.0-python3.11</span>
  <span class="at">environment</span>:
    <span class="at">AIRFLOW__CORE__EXECUTOR</span>: <span class="st">CeleryExecutor</span>
    <span class="at">AIRFLOW__DATABASE__SQL_ALCHEMY_CONN</span>: <span class="st">postgresql+psycopg2://airflow:airflow@postgres/airflow</span>
    <span class="at">AIRFLOW__CELERY__BROKER_URL</span>: <span class="st">redis://:@redis:6379/0</span>
    <span class="at">AIRFLOW__CORE__DAGS_ARE_PAUSED_AT_CREATION</span>: <span class="st">"true"</span>
    <span class="at">AIRFLOW__API__AUTH_BACKENDS</span>: <span class="st">"airflow.api.auth.backend.basic_auth"</span>
  <span class="at">volumes</span>:
    - <span class="st">./dags:/opt/airflow/dags</span>
    - <span class="st">./plugins:/opt/airflow/plugins</span>
    - <span class="st">./logs:/opt/airflow/logs</span>

<span class="at">services</span>:
  <span class="at">postgres</span>:
    <span class="at">image</span>: <span class="st">postgres:15</span>
    <span class="at">environment</span>:
      <span class="at">POSTGRES_USER</span>: <span class="st">airflow</span>
      <span class="at">POSTGRES_PASSWORD</span>: <span class="st">airflow</span>
      <span class="at">POSTGRES_DB</span>: <span class="st">airflow</span>

  <span class="at">redis</span>:
    <span class="at">image</span>: <span class="st">redis:7</span>

  <span class="at">webserver</span>:
    <span class="at"><<</span>: <span class="st">*airflow-common</span>
    <span class="at">command</span>: <span class="st">webserver</span>
    <span class="at">ports</span>:
      - <span class="st">"8080:8080"</span>

  <span class="at">scheduler</span>:
    <span class="at"><<</span>: <span class="st">*airflow-common</span>
    <span class="at">command</span>: <span class="st">scheduler</span>

  <span class="at">worker</span>:
    <span class="at"><<</span>: <span class="st">*airflow-common</span>
    <span class="at">command</span>: <span class="st">celery worker</span></pre></div>
      </div>
    `
  },

  'airflow-monitoring': {
    id: 'airflow-monitoring',
    title: 'Airflow Monitoring & Alerting',
    category: 'Apache Airflow & Orchestration',
    tags: ['airflow', 'monitoring', 'alerting', 'observability'],
    lastUpdated: '2025-07-08',
    body: `
      <h2>Airflow Monitoring & Alerting</h2>
      <p>Setting up comprehensive monitoring for production Airflow deployments.</p>

      <h3>Custom Airflow Callback for Multi-Channel Alerting</h3>
      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-lang">Python</span>
          <button class="code-copy-btn" onclick="copyCode(this)">📋 Copy</button>
        </div>
        <div class="code-content"><pre><span class="cm"># plugins/callbacks.py — Unified alerting callbacks</span>
<span class="kw">import</span> requests
<span class="kw">from</span> airflow.models <span class="kw">import</span> Variable

<span class="kw">def</span> <span class="fn">on_failure</span>(context):
    <span class="st">"""Send alerts to Slack + PagerDuty on DAG failure."""</span>
    dag_id = context[<span class="st">'dag'</span>].dag_id
    task_id = context[<span class="st">'task_instance'</span>].task_id
    log_url = context[<span class="st">'task_instance'</span>].log_url
    exception = context.get(<span class="st">'exception'</span>, <span class="st">'Unknown'</span>)

    <span class="cm"># Slack alert</span>
    slack_url = Variable.get(<span class="st">"slack_webhook_url"</span>)
    requests.post(slack_url, json={
        <span class="st">"text"</span>: <span class="st">f"🚨 *DAG Failed*\\n"</span>
               <span class="st">f"• DAG: {dag_id}\\n"</span>
               <span class="st">f"• Task: {task_id}\\n"</span>
               <span class="st">f"• Error: {str(exception)[:200]}\\n"</span>
               <span class="st">f"• <{log_url}|View Logs>"</span>
    })

    <span class="cm"># PagerDuty for critical DAGs</span>
    critical_dags = [<span class="st">"production_orders_etl"</span>, <span class="st">"revenue_pipeline"</span>]
    <span class="kw">if</span> dag_id <span class="kw">in</span> critical_dags:
        pd_key = Variable.get(<span class="st">"pagerduty_routing_key"</span>)
        requests.post(<span class="st">"https://events.pagerduty.com/v2/enqueue"</span>, json={
            <span class="st">"routing_key"</span>: pd_key,
            <span class="st">"event_action"</span>: <span class="st">"trigger"</span>,
            <span class="st">"payload"</span>: {
                <span class="st">"summary"</span>: <span class="st">f"Critical DAG failed: {dag_id}/{task_id}"</span>,
                <span class="st">"severity"</span>: <span class="st">"critical"</span>,
                <span class="st">"source"</span>: <span class="st">"airflow"</span>,
            }
        })

<span class="kw">def</span> <span class="fn">on_sla_miss</span>(dag, task_list, blocking_task_list, slas, blocking_tis):
    <span class="st">"""Alert when tasks miss their SLA."""</span>
    slack_url = Variable.get(<span class="st">"slack_webhook_url"</span>)
    requests.post(slack_url, json={
        <span class="st">"text"</span>: <span class="st">f"⏰ *SLA Miss*\\nDAG: {dag.dag_id}\\n"</span>
               <span class="st">f"Tasks: {', '.join(str(t) for t in task_list)}"</span>
    })</pre></div>
      </div>
    `
  },

  // ─── 5. dbt ────────────────────────────────────────

  'dbt-core-vs-cloud': {
    id: 'dbt-core-vs-cloud',
    title: 'dbt Core vs dbt Cloud',
    category: 'dbt & Data Transformation',
    tags: ['dbt', 'transformation', 'analytics-engineering'],
    lastUpdated: '2025-07-12',
    body: `
      <h2>dbt Core vs dbt Cloud</h2>
      <p>dbt (data build tool) transforms data in your warehouse by writing SQL SELECT statements. It handles dependencies, testing, and documentation.</p>

      <table>
        <thead><tr><th>Feature</th><th>dbt Core (OSS)</th><th>dbt Cloud</th></tr></thead>
        <tbody>
          <tr><td>Cost</td><td>Free</td><td>Paid (free tier available)</td></tr>
          <tr><td>Execution</td><td>CLI / Airflow / CI</td><td>Managed scheduler</td></tr>
          <tr><td>IDE</td><td>VS Code + extension</td><td>Built-in web IDE</td></tr>
          <tr><td>CI/CD</td><td>Self-managed (GitHub Actions)</td><td>Built-in slim CI</td></tr>
          <tr><td>Documentation</td><td>Self-hosted <code>dbt docs serve</code></td><td>Auto-hosted docs</td></tr>
          <tr><td>Best For</td><td>Teams with engineering capacity</td><td>Teams wanting managed solution</td></tr>
        </tbody>
      </table>

      <h3>dbt Project Structure</h3>
      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-lang">Bash</span>
          <button class="code-copy-btn" onclick="copyCode(this)">📋 Copy</button>
        </div>
        <div class="code-content"><pre><span class="cm"># Standard dbt project layout</span>
my_dbt_project/
├── dbt_project.yml          <span class="cm"># Project configuration</span>
├── profiles.yml             <span class="cm"># Connection profiles (local only)</span>
├── models/
│   ├── staging/             <span class="cm"># 1:1 with source tables</span>
│   │   ├── stg_orders.sql
│   │   ├── stg_customers.sql
│   │   └── _stg_models.yml  <span class="cm"># Tests & docs</span>
│   ├── intermediate/        <span class="cm"># Business logic joins</span>
│   │   └── int_orders_enriched.sql
│   └── marts/               <span class="cm"># Final analytics tables</span>
│       ├── finance/
│       │   └── fct_revenue.sql
│       └── marketing/
│           └── dim_customers.sql
├── tests/                   <span class="cm"># Custom data tests</span>
│   └── assert_positive_revenue.sql
├── macros/                  <span class="cm"># Reusable SQL functions</span>
│   └── generate_surrogate_key.sql
├── seeds/                   <span class="cm"># Static CSV data</span>
│   └── country_codes.csv
└── snapshots/               <span class="cm"># SCD Type-2 tracking</span>
    └── snap_customers.sql</pre></div>
      </div>
    `
  },

  'dbt-project': {
    id: 'dbt-project',
    title: 'Building a dbt Project',
    category: 'dbt & Data Transformation',
    tags: ['dbt', 'models', 'tests', 'documentation'],
    lastUpdated: '2025-07-15',
    body: `
      <h2>Building a dbt Project — Real Example</h2>
      <p>A complete dbt project for an e-commerce analytics platform with staging, intermediate, and mart layers.</p>

      <h3>Staging Model — Clean Raw Data</h3>
      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-lang">SQL</span>
          <button class="code-copy-btn" onclick="copyCode(this)">📋 Copy</button>
        </div>
        <div class="code-content"><pre><span class="cm">-- models/staging/stg_orders.sql</span>
<span class="cm">-- Staging model: 1:1 with source, with renaming and type casting</span>

<span class="kw">WITH</span> source <span class="kw">AS</span> (
    <span class="kw">SELECT</span> * <span class="kw">FROM</span> {{ source(<span class="st">'ecommerce'</span>, <span class="st">'raw_orders'</span>) }}
),

renamed <span class="kw">AS</span> (
    <span class="kw">SELECT</span>
        id                          <span class="kw">AS</span> order_id,
        user_id                     <span class="kw">AS</span> customer_id,
        <span class="fn">CAST</span>(order_date <span class="kw">AS</span> <span class="nb">DATE</span>)   <span class="kw">AS</span> order_date,
        <span class="fn">CAST</span>(amount <span class="kw">AS</span> <span class="nb">DECIMAL</span>(<span class="nb">10</span>,<span class="nb">2</span>)) <span class="kw">AS</span> order_amount,
        <span class="fn">LOWER</span>(status)               <span class="kw">AS</span> order_status,
        <span class="fn">LOWER</span>(payment_method)       <span class="kw">AS</span> payment_method,
        created_at,
        updated_at
    <span class="kw">FROM</span> source
    <span class="kw">WHERE</span> id <span class="kw">IS NOT NULL</span>
      <span class="kw">AND</span> _deleted <span class="kw">IS</span> <span class="nb">FALSE</span>
)

<span class="kw">SELECT</span> * <span class="kw">FROM</span> renamed</pre></div>
      </div>

      <h3>Mart Model — Revenue Facts</h3>
      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-lang">SQL</span>
          <button class="code-copy-btn" onclick="copyCode(this)">📋 Copy</button>
        </div>
        <div class="code-content"><pre><span class="cm">-- models/marts/finance/fct_revenue.sql</span>
<span class="cm">-- {{ config(materialized='incremental', unique_key='order_id') }}</span>

<span class="kw">WITH</span> orders <span class="kw">AS</span> (
    <span class="kw">SELECT</span> * <span class="kw">FROM</span> {{ ref(<span class="st">'stg_orders'</span>) }}
    <span class="kw">WHERE</span> order_status = <span class="st">'completed'</span>
    {% if is_incremental() %}
      <span class="kw">AND</span> updated_at > (<span class="kw">SELECT</span> <span class="fn">MAX</span>(updated_at) <span class="kw">FROM</span> {{ this }})
    {% endif %}
),

customers <span class="kw">AS</span> (
    <span class="kw">SELECT</span> * <span class="kw">FROM</span> {{ ref(<span class="st">'dim_customers'</span>) }}
),

final <span class="kw">AS</span> (
    <span class="kw">SELECT</span>
        o.order_id,
        o.order_date,
        o.customer_id,
        c.customer_segment,
        c.acquisition_channel,
        o.order_amount,
        o.payment_method,
        <span class="fn">ROW_NUMBER</span>() <span class="kw">OVER</span>(
            <span class="kw">PARTITION BY</span> o.customer_id
            <span class="kw">ORDER BY</span> o.order_date
        ) <span class="kw">AS</span> customer_order_number,
        o.updated_at
    <span class="kw">FROM</span> orders o
    <span class="kw">LEFT JOIN</span> customers c <span class="kw">ON</span> o.customer_id = c.customer_id
)

<span class="kw">SELECT</span> * <span class="kw">FROM</span> final</pre></div>
      </div>

      <h3>dbt Tests & Schema Definition</h3>
      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-lang">YAML</span>
          <button class="code-copy-btn" onclick="copyCode(this)">📋 Copy</button>
        </div>
        <div class="code-content"><pre><span class="cm"># models/marts/finance/_finance_models.yml</span>
<span class="at">models</span>:
  - <span class="at">name</span>: <span class="st">fct_revenue</span>
    <span class="at">description</span>: <span class="st">"Completed order revenue facts with customer segments"</span>
    <span class="at">columns</span>:
      - <span class="at">name</span>: <span class="st">order_id</span>
        <span class="at">description</span>: <span class="st">"Primary key"</span>
        <span class="at">tests</span>:
          - <span class="st">unique</span>
          - <span class="st">not_null</span>
      - <span class="at">name</span>: <span class="st">order_amount</span>
        <span class="at">description</span>: <span class="st">"Order amount in USD"</span>
        <span class="at">tests</span>:
          - <span class="st">not_null</span>
          - <span class="at">dbt_utils.accepted_range</span>:
              <span class="at">min_value</span>: <span class="nb">0</span>
              <span class="at">max_value</span>: <span class="nb">100000</span>
      - <span class="at">name</span>: <span class="st">payment_method</span>
        <span class="at">tests</span>:
          - <span class="at">accepted_values</span>:
              <span class="at">values</span>: [<span class="st">"credit_card"</span>, <span class="st">"debit_card"</span>, <span class="st">"paypal"</span>, <span class="st">"bank_transfer"</span>]</pre></div>
      </div>
    `
  },

  'dbt-incremental': {
    id: 'dbt-incremental',
    title: 'dbt Incremental Models & Snapshots',
    category: 'dbt & Data Transformation',
    tags: ['dbt', 'incremental', 'snapshots', 'scd'],
    lastUpdated: '2025-07-09',
    body: `
      <h2>Incremental Models & Snapshots</h2>
      <p>Incremental models process only new/changed data, reducing cost and runtime. Snapshots track historical changes (SCD Type-2).</p>

      <h3>Snapshot (SCD Type-2) — Track Customer Changes</h3>
      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-lang">SQL</span>
          <button class="code-copy-btn" onclick="copyCode(this)">📋 Copy</button>
        </div>
        <div class="code-content"><pre><span class="cm">-- snapshots/snap_customers.sql</span>
<span class="cm">-- Track historical changes to customer records</span>
{% snapshot snap_customers %}

{{
    config(
        target_schema=<span class="st">'snapshots'</span>,
        unique_key=<span class="st">'customer_id'</span>,
        strategy=<span class="st">'timestamp'</span>,
        updated_at=<span class="st">'updated_at'</span>,
        invalidate_hard_deletes=True,
    )
}}

<span class="kw">SELECT</span>
    customer_id,
    name,
    email,
    plan_type,        <span class="cm">-- Track plan upgrades/downgrades</span>
    billing_address,
    updated_at
<span class="kw">FROM</span> {{ source(<span class="st">'app'</span>, <span class="st">'customers'</span>) }}

{% endsnapshot %}</pre></div>
      </div>

      <div class="callout info">
        <div class="callout-title">💡 When to Use Snapshots vs Incremental</div>
        <div class="callout-body">
          <strong>Snapshots:</strong> When you need to track HOW data changed over time (customer plan changes, price history)<br>
          <strong>Incremental:</strong> When you only need the latest state but want to avoid reprocessing everything
        </div>
      </div>
    `
  },

  'dbt-cicd': {
    id: 'dbt-cicd',
    title: 'CI/CD with dbt',
    category: 'dbt & Data Transformation',
    tags: ['dbt', 'ci-cd', 'github-actions', 'testing'],
    lastUpdated: '2025-07-13',
    body: `
      <h2>CI/CD with dbt</h2>
      <p>Automate dbt testing and deployment with GitHub Actions for reliable data transformations.</p>

      <h3>GitHub Actions Workflow for dbt</h3>
      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-lang">YAML</span>
          <button class="code-copy-btn" onclick="copyCode(this)">📋 Copy</button>
        </div>
        <div class="code-content"><pre><span class="cm"># .github/workflows/dbt-ci.yml</span>
<span class="at">name</span>: <span class="st">dbt CI/CD</span>

<span class="at">on</span>:
  <span class="at">pull_request</span>:
    <span class="at">paths</span>: [<span class="st">'models/**'</span>, <span class="st">'macros/**'</span>, <span class="st">'tests/**'</span>]
  <span class="at">push</span>:
    <span class="at">branches</span>: [<span class="st">main</span>]

<span class="at">jobs</span>:
  <span class="at">dbt-ci</span>:
    <span class="at">runs-on</span>: <span class="st">ubuntu-latest</span>
    <span class="at">steps</span>:
      - <span class="at">uses</span>: <span class="st">actions/checkout@v4</span>

      - <span class="at">name</span>: <span class="st">Setup Python</span>
        <span class="at">uses</span>: <span class="st">actions/setup-python@v5</span>
        <span class="at">with</span>:
          <span class="at">python-version</span>: <span class="st">"3.11"</span>

      - <span class="at">name</span>: <span class="st">Install dbt</span>
        <span class="at">run</span>: <span class="st">pip install dbt-bigquery==1.7.0</span>

      - <span class="at">name</span>: <span class="st">dbt deps</span>
        <span class="at">run</span>: <span class="st">dbt deps</span>

      - <span class="at">name</span>: <span class="st">dbt build (modified models only)</span>
        <span class="at">if</span>: <span class="st">github.event_name == 'pull_request'</span>
        <span class="at">run</span>: |
          dbt build --select state:modified+ \\
            --defer --state ./prod-manifest/ \\
            --target ci
        <span class="at">env</span>:
          <span class="at">DBT_PROFILES_DIR</span>: <span class="st">./</span>
          <span class="at">GCP_KEYFILE</span>: <span class="st">\${{ secrets.GCP_SA_KEY }}</span>

      - <span class="at">name</span>: <span class="st">dbt build (full production)</span>
        <span class="at">if</span>: <span class="st">github.ref == 'refs/heads/main'</span>
        <span class="at">run</span>: <span class="st">dbt build --target prod</span>

      - <span class="at">name</span>: <span class="st">Comment PR with results</span>
        <span class="at">if</span>: <span class="st">github.event_name == 'pull_request'</span>
        <span class="at">uses</span>: <span class="st">actions/github-script@v7</span>
        <span class="at">with</span>:
          <span class="at">script</span>: |
            github.rest.issues.createComment({
              owner: context.repo.owner,
              repo: context.repo.repo,
              issue_number: context.issue.number,
              body: '✅ dbt CI passed! All models built and tested.'
            })</pre></div>
      </div>
    `
  },

  // ─── 6. MLOps ──────────────────────────────────────

  'mlops-level-1-architecture': {
    id: 'mlops-level-1-architecture',
    title: 'MLOps Level 1 Architecture',
    category: 'MLOps & ML Engineering',
    tags: ['mlops', 'architecture', 'pipeline', 'automation'],
    lastUpdated: '2026-07-18',
    body: `
      <h2>MLOps Level 1 Architecture: Automated ML Pipeline</h2>
      <p>This architecture represents Level 1 of MLOps maturity, where the goal is to perform continuous training of the model by automating the ML pipeline.</p>

      <h3>High-Level Architecture</h3>
      <div class="arch-diagram"><pre>
                            ┌───────────────┐
                            │ Model Analysis│
                            └───────▲───────┘
                                    │
┌──────────────┐     ┌──────────────▼─────────────┐     ┌──────────────────┐     ┌───────────────────┐
│ Data Analysis│────▶│ Orchestrated Experiment    │────▶│ Source Repository│────▶│ Pipeline Deployment│
└──────────────┘     └────────────────────────────┘     └──────────────────┘     └────────┬──────────┘
       ▲                                                                                  │
       │ Offline extraction                                                               │
┌──────┴───────┐                                                                          │
│ Feature Store│◀┐                                                                        │
└──────┬───────┘ │                                                                        │
       │         │                                                                        │
       │ Batch   │                                                                        │
       │ fetching│                                                                        │
┌──────▼─────────┴────────────────────────────────┐     ┌──────────────────┐              │
│            Automated ML Pipeline                │────▶│  Model Registry  │◀─────────────┘
└──────┬───────────────────────────────────▲──────┘     └────────┬─────────┘
       │                                   │                     │
       │                                   │                     ▼
┌──────▼──────────────┐             ┌──────┴───────┐    ┌──────────────────┐
│  ML Metadata Store  │             │   Trigger    │    │ CD: Model Serving│
└─────────────────────┘             └──────▲───────┘    └────────┬─────────┘
                                           │                     │
                                    ┌──────┴───────┐    ┌────────▼─────────┐
                                    │ Performance  │◀───│ Prediction Service│
                                    │ Monitoring   │    └────────┬─────────┘
                                    └──────────────┘             │
                                                                 │
                                    (Logging features &          │
                                     predictions back to         │
                                     Feature Store)              │
                                    .............................┘
      </pre></div>

      <h3>Automated Pipeline Steps</h3>
      <div class="pipeline-flow">
        <div class="pipeline-step">1. Data Ingestion</div>
        <span class="pipeline-arrow">→</span>
        <div class="pipeline-step">2. Data Preprocessing</div>
        <span class="pipeline-arrow">→</span>
        <div class="pipeline-step">3. Model Training</div>
        <span class="pipeline-arrow">→</span>
        <div class="pipeline-step">4. Model Evaluation</div>
        <span class="pipeline-arrow">→</span>
        <div class="pipeline-step">5. Model Deployment</div>
      </div>

      <div class="callout info">
        <div class="callout-title">💡 Key Concept</div>
        <div class="callout-body">
          In Level 1, we automate the pipeline itself, not just the model training. A trigger (e.g., performance degradation detected by the monitoring service, or a scheduled cron job) kicks off the Automated ML Pipeline to retrain the model with fresh data from the Feature Store. The new model is automatically evaluated and pushed to the Model Registry.
        </div>
      </div>
    `
  },

  'mlops-lifecycle': {
    id: 'mlops-lifecycle',
    title: 'MLOps Lifecycle & Maturity Model',
    category: 'MLOps & ML Engineering',
    tags: ['mlops', 'lifecycle', 'maturity', 'ml-engineering'],
    lastUpdated: '2025-07-15',
    body: `
      <h2>MLOps Lifecycle</h2>
      <p>MLOps (Machine Learning Operations) applies DevOps principles to ML systems. It bridges the gap between data science experimentation and production ML.</p>

      <div class="arch-diagram"><pre>
┌─────────────────────────────────────────────────────────────────────┐
│                       MLOPS LIFECYCLE                               │
│                                                                     │
│  ┌─────────┐   ┌──────────┐   ┌──────────┐   ┌──────────────────┐ │
│  │  Data    │──▶│  Model   │──▶│  Model   │──▶│  Monitoring &    │ │
│  │  Prep    │   │ Training │   │ Serving  │   │  Feedback Loop   │ │
│  └─────────┘   └──────────┘   └──────────┘   └──────────────────┘ │
│       │              │              │                  │            │
│  Feature Store   Experiment    Model Registry     Drift Detection  │
│  Data Validation Tracking      A/B Testing        Auto-Retrain     │
│  Feature Eng.    HPO           Canary Deploy       Alerting         │
└─────────────────────────────────────────────────────────────────────┘
      </pre></div>

      <h3>MLOps Maturity Levels</h3>
      <table>
        <thead><tr><th>Level</th><th>Description</th><th>Characteristics</th></tr></thead>
        <tbody>
          <tr><td><strong>0 — Manual</strong></td><td>No MLOps</td><td>Jupyter notebooks, manual deployment, no monitoring</td></tr>
          <tr><td><strong>1 — DevOps</strong></td><td>ML pipeline automation</td><td>Automated training, CI/CD, basic monitoring</td></tr>
          <tr><td><strong>2 — MLOps</strong></td><td>Full ML lifecycle automation</td><td>Feature stores, model registry, A/B testing, drift detection</td></tr>
          <tr><td><strong>3 — Auto-ML</strong></td><td>Self-healing ML systems</td><td>Automated retraining, AutoML, continuous learning</td></tr>
        </tbody>
      </table>

      <h3>Essential MLOps Tools</h3>
      <table>
        <thead><tr><th>Category</th><th>Tools</th></tr></thead>
        <tbody>
          <tr><td>Experiment Tracking</td><td>MLflow, Weights & Biases, Neptune</td></tr>
          <tr><td>Feature Store</td><td>Feast, Tecton, Hopsworks</td></tr>
          <tr><td>Model Registry</td><td>MLflow, Vertex AI, SageMaker</td></tr>
          <tr><td>Pipeline Orchestration</td><td>Kubeflow, Airflow, Dagster</td></tr>
          <tr><td>Model Serving</td><td>Seldon, KServe, TorchServe, FastAPI</td></tr>
          <tr><td>Monitoring</td><td>Evidently, Arize, WhyLabs</td></tr>
        </tbody>
      </table>
    `
  },

  'feature-stores': {
    id: 'feature-stores',
    title: 'Feature Stores (Feast)',
    category: 'MLOps & ML Engineering',
    tags: ['feature-store', 'feast', 'ml-engineering', 'features'],
    lastUpdated: '2025-07-12',
    body: `
      <h2>Feature Stores with Feast</h2>
      <p>A feature store is a centralized repository for storing, sharing, and serving ML features. Feast is the leading open-source feature store.</p>

      <h3>Feast Feature Definitions</h3>
      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-lang">Python</span>
          <button class="code-copy-btn" onclick="copyCode(this)">📋 Copy</button>
        </div>
        <div class="code-content"><pre><span class="cm"># feature_repo/features.py — Feast feature definitions</span>
<span class="kw">from</span> datetime <span class="kw">import</span> timedelta
<span class="kw">from</span> feast <span class="kw">import</span> (
    Entity, FeatureView, Field, FileSource,
    PushSource, BatchFeatureView,
)
<span class="kw">from</span> feast.types <span class="kw">import</span> Float64, Int64, String

<span class="cm"># Define entity (primary key)</span>
customer = Entity(
    name=<span class="st">"customer_id"</span>,
    join_keys=[<span class="st">"customer_id"</span>],
    description=<span class="st">"Unique customer identifier"</span>,
)

<span class="cm"># Batch feature source (from data warehouse)</span>
customer_stats_source = FileSource(
    path=<span class="st">"s3://feature-store/customer_stats.parquet"</span>,
    timestamp_field=<span class="st">"event_timestamp"</span>,
)

<span class="cm"># Feature view: customer purchasing behavior</span>
customer_features = FeatureView(
    name=<span class="st">"customer_purchase_features"</span>,
    entities=[customer],
    ttl=timedelta(days=<span class="nb">1</span>),
    schema=[
        Field(name=<span class="st">"total_orders_30d"</span>,    dtype=Int64),
        Field(name=<span class="st">"total_spend_30d"</span>,     dtype=Float64),
        Field(name=<span class="st">"avg_order_value"</span>,     dtype=Float64),
        Field(name=<span class="st">"days_since_last_order"</span>, dtype=Int64),
        Field(name=<span class="st">"preferred_category"</span>,  dtype=String),
        Field(name=<span class="st">"churn_risk_score"</span>,    dtype=Float64),
    ],
    source=customer_stats_source,
    online=<span class="nb">True</span>,   <span class="cm"># Enable online serving (Redis)</span>
    tags={<span class="st">"team"</span>: <span class="st">"ml-platform"</span>, <span class="st">"version"</span>: <span class="st">"v2"</span>},
)

<span class="cm"># Real-time feature source (pushed from streaming)</span>
realtime_source = PushSource(
    name=<span class="st">"customer_realtime_source"</span>,
    batch_source=customer_stats_source,
)

<span class="cm"># Fetch features for model inference</span>
<span class="kw">from</span> feast <span class="kw">import</span> FeatureStore
store = FeatureStore(repo_path=<span class="st">"feature_repo/"</span>)

<span class="cm"># Online serving (low-latency, for real-time predictions)</span>
features = store.get_online_features(
    features=[
        <span class="st">"customer_purchase_features:total_spend_30d"</span>,
        <span class="st">"customer_purchase_features:churn_risk_score"</span>,
    ],
    entity_rows=[{<span class="st">"customer_id"</span>: <span class="st">"CUST-12345"</span>}],
).to_dict()</pre></div>
      </div>
    `
  },

  'model-training': {
    id: 'model-training',
    title: 'Model Training Pipelines (MLflow)',
    category: 'MLOps & ML Engineering',
    tags: ['mlflow', 'training', 'experiment-tracking', 'pipeline'],
    lastUpdated: '2025-07-14',
    body: `
      <h2>Model Training with MLflow</h2>
      <p>MLflow is the most popular open-source platform for managing the ML lifecycle: experiment tracking, model registry, and deployment.</p>

      <h3>Production Training Pipeline</h3>
      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-lang">Python</span>
          <button class="code-copy-btn" onclick="copyCode(this)">📋 Copy</button>
        </div>
        <div class="code-content"><pre><span class="cm"># train.py — Production ML training with MLflow tracking</span>
<span class="kw">import</span> mlflow
<span class="kw">import</span> mlflow.sklearn
<span class="kw">import</span> pandas <span class="kw">as</span> pd
<span class="kw">from</span> sklearn.ensemble <span class="kw">import</span> GradientBoostingClassifier
<span class="kw">from</span> sklearn.model_selection <span class="kw">import</span> train_test_split
<span class="kw">from</span> sklearn.metrics <span class="kw">import</span> accuracy_score, f1_score, roc_auc_score
<span class="kw">import</span> logging

logger = logging.getLogger(__name__)

mlflow.set_tracking_uri(<span class="st">"http://mlflow-server:5000"</span>)
mlflow.set_experiment(<span class="st">"churn-prediction-v2"</span>)

<span class="kw">def</span> <span class="fn">train_churn_model</span>(data_path: str, params: dict):
    <span class="st">"""Train churn prediction model with full MLflow tracking."""</span>

    <span class="kw">with</span> mlflow.start_run(run_name=<span class="st">"gbm-churn-prod"</span>) <span class="kw">as</span> run:
        <span class="cm"># Log parameters</span>
        mlflow.log_params(params)
        mlflow.set_tag(<span class="st">"model_type"</span>, <span class="st">"gradient_boosting"</span>)
        mlflow.set_tag(<span class="st">"team"</span>, <span class="st">"ml-platform"</span>)

        <span class="cm"># Load and split data</span>
        df = pd.read_parquet(data_path)
        X = df.drop(columns=[<span class="st">"churned"</span>, <span class="st">"customer_id"</span>])
        y = df[<span class="st">"churned"</span>]
        X_train, X_test, y_train, y_test = train_test_split(
            X, y, test_size=<span class="nb">0.2</span>, stratify=y, random_state=<span class="nb">42</span>
        )
        mlflow.log_param(<span class="st">"train_size"</span>, len(X_train))
        mlflow.log_param(<span class="st">"test_size"</span>, len(X_test))

        <span class="cm"># Train model</span>
        model = GradientBoostingClassifier(**params)
        model.fit(X_train, y_train)

        <span class="cm"># Evaluate</span>
        y_pred = model.predict(X_test)
        y_proba = model.predict_proba(X_test)[:, <span class="nb">1</span>]

        metrics = {
            <span class="st">"accuracy"</span>: accuracy_score(y_test, y_pred),
            <span class="st">"f1_score"</span>: f1_score(y_test, y_pred),
            <span class="st">"roc_auc"</span>: roc_auc_score(y_test, y_proba),
        }
        mlflow.log_metrics(metrics)
        logger.info(<span class="st">f"Metrics: {metrics}"</span>)

        <span class="cm"># Log model with signature</span>
        <span class="kw">from</span> mlflow.models <span class="kw">import</span> infer_signature
        signature = infer_signature(X_test, y_pred)
        mlflow.sklearn.log_model(
            model, <span class="st">"model"</span>,
            signature=signature,
            registered_model_name=<span class="st">"churn-prediction"</span>,
        )

        <span class="cm"># Promote to production if metrics meet threshold</span>
        <span class="kw">if</span> metrics[<span class="st">"roc_auc"</span>] > <span class="nb">0.85</span>:
            client = mlflow.tracking.MlflowClient()
            latest = client.get_latest_versions(<span class="st">"churn-prediction"</span>)[<span class="nb">0</span>]
            client.transition_model_version_stage(
                name=<span class="st">"churn-prediction"</span>,
                version=latest.version,
                stage=<span class="st">"Production"</span>,
            )
            logger.info(<span class="st">f"Model v{latest.version} promoted to Production!"</span>)

        <span class="kw">return</span> run.info.run_id

<span class="cm"># Run training</span>
params = {
    <span class="st">"n_estimators"</span>: <span class="nb">200</span>,
    <span class="st">"max_depth"</span>: <span class="nb">6</span>,
    <span class="st">"learning_rate"</span>: <span class="nb">0.1</span>,
    <span class="st">"subsample"</span>: <span class="nb">0.8</span>,
    <span class="st">"min_samples_leaf"</span>: <span class="nb">20</span>,
}
train_churn_model(<span class="st">"s3://ml-data/churn_features.parquet"</span>, params)</pre></div>
      </div>
    `
  },

  'model-serving': {
    id: 'model-serving',
    title: 'Model Serving (FastAPI + Docker)',
    category: 'MLOps & ML Engineering',
    tags: ['serving', 'fastapi', 'docker', 'inference', 'api'],
    lastUpdated: '2025-07-16',
    body: `
      <h2>ML Model Serving with FastAPI + Docker</h2>
      <p>Production-grade model serving with health checks, input validation, logging, and Prometheus metrics.</p>

      <h3>FastAPI Model Server</h3>
      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-lang">Python</span>
          <button class="code-copy-btn" onclick="copyCode(this)">📋 Copy</button>
        </div>
        <div class="code-content"><pre><span class="cm"># app/main.py — Production ML model serving API</span>
<span class="kw">import</span> mlflow
<span class="kw">import</span> numpy <span class="kw">as</span> np
<span class="kw">import</span> time, logging
<span class="kw">from</span> fastapi <span class="kw">import</span> FastAPI, HTTPException
<span class="kw">from</span> pydantic <span class="kw">import</span> BaseModel, Field
<span class="kw">from</span> prometheus_client <span class="kw">import</span> Counter, Histogram, generate_latest
<span class="kw">from</span> starlette.responses <span class="kw">import</span> Response

app = FastAPI(title=<span class="st">"Churn Prediction API"</span>, version=<span class="st">"2.0"</span>)
logger = logging.getLogger(__name__)

<span class="cm"># Prometheus metrics</span>
PREDICTIONS = Counter(<span class="st">"predictions_total"</span>, <span class="st">"Total predictions"</span>, [<span class="st">"result"</span>])
LATENCY = Histogram(<span class="st">"prediction_latency_seconds"</span>, <span class="st">"Prediction latency"</span>)

<span class="cm"># Load model from MLflow registry</span>
MODEL = mlflow.sklearn.load_model(<span class="st">"models:/churn-prediction/Production"</span>)

<span class="kw">class</span> <span class="dc">PredictionRequest</span>(BaseModel):
    customer_id: str
    total_orders_30d: int = Field(ge=<span class="nb">0</span>)
    total_spend_30d: float = Field(ge=<span class="nb">0</span>)
    avg_order_value: float = Field(ge=<span class="nb">0</span>)
    days_since_last_order: int = Field(ge=<span class="nb">0</span>)

<span class="kw">class</span> <span class="dc">PredictionResponse</span>(BaseModel):
    customer_id: str
    churn_probability: float
    will_churn: bool
    model_version: str

<span class="dc">@app.get</span>(<span class="st">"/health"</span>)
<span class="kw">def</span> <span class="fn">health_check</span>():
    <span class="kw">return</span> {<span class="st">"status"</span>: <span class="st">"healthy"</span>, <span class="st">"model_loaded"</span>: MODEL <span class="kw">is not</span> <span class="nb">None</span>}

<span class="dc">@app.post</span>(<span class="st">"/predict"</span>, response_model=PredictionResponse)
<span class="kw">def</span> <span class="fn">predict</span>(request: PredictionRequest):
    start = time.time()
    <span class="kw">try</span>:
        features = np.array([[
            request.total_orders_30d,
            request.total_spend_30d,
            request.avg_order_value,
            request.days_since_last_order,
        ]])
        proba = MODEL.predict_proba(features)[<span class="nb">0</span>][<span class="nb">1</span>]
        will_churn = proba > <span class="nb">0.5</span>

        PREDICTIONS.labels(result=<span class="st">"churn"</span> <span class="kw">if</span> will_churn <span class="kw">else</span> <span class="st">"retain"</span>).inc()
        LATENCY.observe(time.time() - start)

        <span class="kw">return</span> PredictionResponse(
            customer_id=request.customer_id,
            churn_probability=round(proba, <span class="nb">4</span>),
            will_churn=will_churn,
            model_version=<span class="st">"2.0"</span>,
        )
    <span class="kw">except</span> Exception <span class="kw">as</span> e:
        logger.error(<span class="st">f"Prediction failed: {e}"</span>)
        <span class="kw">raise</span> HTTPException(status_code=<span class="nb">500</span>, detail=str(e))

<span class="dc">@app.get</span>(<span class="st">"/metrics"</span>)
<span class="kw">def</span> <span class="fn">metrics</span>():
    <span class="kw">return</span> Response(generate_latest(), media_type=<span class="st">"text/plain"</span>)</pre></div>
      </div>

      <h3>Multi-Stage Dockerfile</h3>
      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-lang">Dockerfile</span>
          <button class="code-copy-btn" onclick="copyCode(this)">📋 Copy</button>
        </div>
        <div class="code-content"><pre><span class="cm"># Dockerfile — Multi-stage build for ML model serving</span>
<span class="kw">FROM</span> python:3.11-slim <span class="kw">AS</span> builder
<span class="kw">WORKDIR</span> /build
<span class="kw">COPY</span> requirements.txt .
<span class="kw">RUN</span> pip install --no-cache-dir --prefix=/install -r requirements.txt

<span class="kw">FROM</span> python:3.11-slim
<span class="kw">WORKDIR</span> /app
<span class="kw">COPY</span> --from=builder /install /usr/local
<span class="kw">COPY</span> app/ ./app/

<span class="cm"># Non-root user for security</span>
<span class="kw">RUN</span> useradd -m appuser && chown -R appuser:appuser /app
<span class="kw">USER</span> appuser

<span class="kw">EXPOSE</span> 8000
<span class="kw">HEALTHCHECK</span> --interval=30s --timeout=5s \\
  <span class="kw">CMD</span> curl -f http://localhost:8000/health || exit 1

<span class="kw">CMD</span> ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]</pre></div>
      </div>
    `
  },

  'model-monitoring': {
    id: 'model-monitoring',
    title: 'Model Monitoring & Drift Detection',
    category: 'MLOps & ML Engineering',
    tags: ['monitoring', 'drift', 'evidently', 'observability'],
    lastUpdated: '2025-07-11',
    body: `
      <h2>Model Monitoring & Drift Detection</h2>
      <p>Production ML models degrade over time. Monitoring data drift, concept drift, and model performance is essential.</p>

      <h3>Evidently AI — Drift Detection</h3>
      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-lang">Python</span>
          <button class="code-copy-btn" onclick="copyCode(this)">📋 Copy</button>
        </div>
        <div class="code-content"><pre><span class="cm"># monitoring/drift_detector.py — Automated drift detection</span>
<span class="kw">import</span> pandas <span class="kw">as</span> pd
<span class="kw">from</span> evidently <span class="kw">import</span> ColumnMapping
<span class="kw">from</span> evidently.report <span class="kw">import</span> Report
<span class="kw">from</span> evidently.metric_preset <span class="kw">import</span> DataDriftPreset, TargetDriftPreset
<span class="kw">from</span> evidently.metrics <span class="kw">import</span> DatasetDriftMetric
<span class="kw">import</span> requests

<span class="kw">def</span> <span class="fn">check_data_drift</span>(reference_data: pd.DataFrame, current_data: pd.DataFrame):
    <span class="st">"""Run drift detection and alert if drift is detected."""</span>

    column_mapping = ColumnMapping(
        target=<span class="st">"churned"</span>,
        prediction=<span class="st">"prediction"</span>,
        numerical_features=[<span class="st">"total_spend_30d"</span>, <span class="st">"avg_order_value"</span>,
                           <span class="st">"days_since_last_order"</span>],
        categorical_features=[<span class="st">"customer_segment"</span>, <span class="st">"preferred_category"</span>],
    )

    <span class="cm"># Generate drift report</span>
    report = Report(metrics=[
        DataDriftPreset(),
        TargetDriftPreset(),
        DatasetDriftMetric(),
    ])
    report.run(
        reference_data=reference_data,
        current_data=current_data,
        column_mapping=column_mapping,
    )

    <span class="cm"># Extract drift results</span>
    result = report.as_dict()
    dataset_drift = result[<span class="st">"metrics"</span>][<span class="nb">2</span>][<span class="st">"result"</span>][<span class="st">"dataset_drift"</span>]
    drift_share = result[<span class="st">"metrics"</span>][<span class="nb">2</span>][<span class="st">"result"</span>][<span class="st">"drift_share"</span>]

    <span class="kw">if</span> dataset_drift:
        <span class="cm"># Alert: significant drift detected!</span>
        requests.post(<span class="st">"https://slack.webhook.url"</span>, json={
            <span class="st">"text"</span>: <span class="st">f"🚨 *Data Drift Detected!*\\n"</span>
                   <span class="st">f"• Drift share: {drift_share:.1%}\\n"</span>
                   <span class="st">f"• Action: Model retraining recommended"</span>
        })

    <span class="cm"># Save HTML report</span>
    report.save_html(<span class="st">"reports/drift_report.html"</span>)
    <span class="kw">return</span> dataset_drift, drift_share</pre></div>
      </div>
    `
  },

  'ab-testing-ml': {
    id: 'ab-testing-ml',
    title: 'A/B Testing for ML Models',
    category: 'MLOps & ML Engineering',
    tags: ['ab-testing', 'canary', 'deployment', 'experiments'],
    lastUpdated: '2025-07-10',
    body: `
      <h2>A/B Testing for ML Models</h2>
      <p>Safely rolling out new ML models by splitting traffic between model versions and measuring business metrics.</p>

      <h3>Traffic Splitting with FastAPI</h3>
      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-lang">Python</span>
          <button class="code-copy-btn" onclick="copyCode(this)">📋 Copy</button>
        </div>
        <div class="code-content"><pre><span class="cm"># ab_testing_router.py — A/B testing for ML models</span>
<span class="kw">import</span> hashlib
<span class="kw">import</span> mlflow

<span class="kw">class</span> <span class="dc">ABTestRouter</span>:
    <span class="st">"""Route requests to model versions based on experiment config."""</span>

    <span class="kw">def</span> <span class="fn">__init__</span>(self):
        self.models = {
            <span class="st">"control"</span>: mlflow.sklearn.load_model(
                <span class="st">"models:/churn-prediction/Production"</span>),
            <span class="st">"treatment"</span>: mlflow.sklearn.load_model(
                <span class="st">"models:/churn-prediction-v2/Staging"</span>),
        }
        self.traffic_split = <span class="nb">0.2</span>  <span class="cm"># 20% to treatment</span>

    <span class="kw">def</span> <span class="fn">get_variant</span>(self, customer_id: str) -> str:
        <span class="st">"""Deterministic assignment using hash (same customer always
        gets same variant for consistency)."""</span>
        hash_val = int(hashlib.md5(
            customer_id.encode()).hexdigest(), <span class="nb">16</span>)
        <span class="kw">return</span> <span class="st">"treatment"</span> <span class="kw">if</span> (hash_val % <span class="nb">100</span>) < (
            self.traffic_split * <span class="nb">100</span>) <span class="kw">else</span> <span class="st">"control"</span>

    <span class="kw">def</span> <span class="fn">predict</span>(self, customer_id, features):
        variant = self.get_variant(customer_id)
        model = self.models[variant]
        prediction = model.predict_proba(features)[<span class="nb">0</span>][<span class="nb">1</span>]

        <span class="cm"># Log experiment results for analysis</span>
        self._log_experiment(customer_id, variant, prediction)
        <span class="kw">return</span> prediction, variant

    <span class="kw">def</span> <span class="fn">_log_experiment</span>(self, customer_id, variant, prediction):
        <span class="cm"># Log to experiment tracking system</span>
        <span class="kw">pass</span></pre></div>
      </div>
    `
  },

  // ─── 7. DOCKER & KUBERNETES ─────────────────────────

  'docker-for-de': {
    id: 'docker-for-de',
    title: 'Docker for Data Engineers',
    category: 'Docker & Kubernetes',
    tags: ['docker', 'containers', 'data-engineering'],
    lastUpdated: '2025-07-08',
    body: `
      <h2>Docker for Data Engineers</h2>
      <p>Docker ensures reproducible environments for data pipelines. Every team member and CI/CD system runs the exact same code in the exact same environment.</p>

      <h3>Multi-Stage Dockerfile for Data Pipeline</h3>
      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-lang">Dockerfile</span>
          <button class="code-copy-btn" onclick="copyCode(this)">📋 Copy</button>
        </div>
        <div class="code-content"><pre><span class="cm"># Dockerfile for data pipeline worker</span>
<span class="kw">FROM</span> python:3.11-slim <span class="kw">AS</span> base

<span class="cm"># Install system deps</span>
<span class="kw">RUN</span> apt-get update && apt-get install -y --no-install-recommends \\
    gcc libpq-dev curl && \\
    rm -rf /var/lib/apt/lists/*

<span class="kw">WORKDIR</span> /app

<span class="cm"># Install Python deps (cached layer)</span>
<span class="kw">COPY</span> requirements.txt .
<span class="kw">RUN</span> pip install --no-cache-dir -r requirements.txt

<span class="cm"># Copy application code</span>
<span class="kw">COPY</span> src/ ./src/
<span class="kw">COPY</span> dags/ ./dags/

<span class="cm"># Security: non-root user</span>
<span class="kw">RUN</span> useradd -m pipeline && chown -R pipeline:pipeline /app
<span class="kw">USER</span> pipeline

<span class="kw">ENV</span> PYTHONPATH=/app
<span class="kw">ENTRYPOINT</span> ["python", "-m", "src.main"]</pre></div>
      </div>
    `
  },

  'k8s-fundamentals': {
    id: 'k8s-fundamentals',
    title: 'Kubernetes Fundamentals',
    category: 'Docker & Kubernetes',
    tags: ['kubernetes', 'k8s', 'containers', 'orchestration'],
    lastUpdated: '2025-07-07',
    body: `
      <h2>Kubernetes Fundamentals for Data Engineers</h2>
      <p>Kubernetes orchestrates containerized workloads at scale. For data engineers, it's the platform for running Spark jobs, Airflow workers, and ML model servers.</p>

      <h3>Key Kubernetes Objects</h3>
      <table>
        <thead><tr><th>Object</th><th>Purpose</th><th>Data Engineering Use Case</th></tr></thead>
        <tbody>
          <tr><td><strong>Pod</strong></td><td>Smallest deployable unit</td><td>Single Spark executor, Airflow task</td></tr>
          <tr><td><strong>Deployment</strong></td><td>Manages replicated pods</td><td>ML model API servers</td></tr>
          <tr><td><strong>Job</strong></td><td>One-off batch execution</td><td>Spark batch jobs, dbt runs</td></tr>
          <tr><td><strong>CronJob</strong></td><td>Scheduled Jobs</td><td>Periodic data syncs</td></tr>
          <tr><td><strong>Service</strong></td><td>Stable network endpoint</td><td>Exposing model API, Kafka broker</td></tr>
          <tr><td><strong>ConfigMap</strong></td><td>Configuration data</td><td>Pipeline configs, feature flags</td></tr>
          <tr><td><strong>Secret</strong></td><td>Sensitive data</td><td>DB passwords, API keys</td></tr>
        </tbody>
      </table>

      <h3>Kubernetes Deployment for ML API</h3>
      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-lang">YAML</span>
          <button class="code-copy-btn" onclick="copyCode(this)">📋 Copy</button>
        </div>
        <div class="code-content"><pre><span class="cm"># k8s/deployment.yaml — ML model serving deployment</span>
<span class="at">apiVersion</span>: <span class="st">apps/v1</span>
<span class="at">kind</span>: <span class="st">Deployment</span>
<span class="at">metadata</span>:
  <span class="at">name</span>: <span class="st">churn-prediction-api</span>
  <span class="at">labels</span>:
    <span class="at">app</span>: <span class="st">churn-prediction</span>
<span class="at">spec</span>:
  <span class="at">replicas</span>: <span class="nb">3</span>
  <span class="at">selector</span>:
    <span class="at">matchLabels</span>:
      <span class="at">app</span>: <span class="st">churn-prediction</span>
  <span class="at">template</span>:
    <span class="at">metadata</span>:
      <span class="at">labels</span>:
        <span class="at">app</span>: <span class="st">churn-prediction</span>
    <span class="at">spec</span>:
      <span class="at">containers</span>:
        - <span class="at">name</span>: <span class="st">api</span>
          <span class="at">image</span>: <span class="st">gcr.io/my-project/churn-api:v2.0</span>
          <span class="at">ports</span>:
            - <span class="at">containerPort</span>: <span class="nb">8000</span>
          <span class="at">resources</span>:
            <span class="at">requests</span>:
              <span class="at">memory</span>: <span class="st">"512Mi"</span>
              <span class="at">cpu</span>: <span class="st">"250m"</span>
            <span class="at">limits</span>:
              <span class="at">memory</span>: <span class="st">"1Gi"</span>
              <span class="at">cpu</span>: <span class="st">"500m"</span>
          <span class="at">livenessProbe</span>:
            <span class="at">httpGet</span>:
              <span class="at">path</span>: <span class="st">/health</span>
              <span class="at">port</span>: <span class="nb">8000</span>
            <span class="at">initialDelaySeconds</span>: <span class="nb">15</span>
            <span class="at">periodSeconds</span>: <span class="nb">10</span>
          <span class="at">env</span>:
            - <span class="at">name</span>: <span class="st">MLFLOW_TRACKING_URI</span>
              <span class="at">value</span>: <span class="st">"http://mlflow:5000"</span></pre></div>
      </div>
    `
  },

  'ml-on-k8s': {
    id: 'ml-on-k8s',
    title: 'Deploying ML Models on Kubernetes',
    category: 'Docker & Kubernetes',
    tags: ['kubernetes', 'ml', 'kserve', 'seldon'],
    lastUpdated: '2025-07-09',
    body: `
      <h2>Deploying ML Models on Kubernetes</h2>
      <p>Production ML serving on Kubernetes with auto-scaling, canary deployments, and GPU support.</p>

      <h3>Horizontal Pod Autoscaler</h3>
      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-lang">YAML</span>
          <button class="code-copy-btn" onclick="copyCode(this)">📋 Copy</button>
        </div>
        <div class="code-content"><pre><span class="cm"># k8s/hpa.yaml — Auto-scale based on CPU and custom metrics</span>
<span class="at">apiVersion</span>: <span class="st">autoscaling/v2</span>
<span class="at">kind</span>: <span class="st">HorizontalPodAutoscaler</span>
<span class="at">metadata</span>:
  <span class="at">name</span>: <span class="st">churn-api-hpa</span>
<span class="at">spec</span>:
  <span class="at">scaleTargetRef</span>:
    <span class="at">apiVersion</span>: <span class="st">apps/v1</span>
    <span class="at">kind</span>: <span class="st">Deployment</span>
    <span class="at">name</span>: <span class="st">churn-prediction-api</span>
  <span class="at">minReplicas</span>: <span class="nb">2</span>
  <span class="at">maxReplicas</span>: <span class="nb">10</span>
  <span class="at">metrics</span>:
    - <span class="at">type</span>: <span class="st">Resource</span>
      <span class="at">resource</span>:
        <span class="at">name</span>: <span class="st">cpu</span>
        <span class="at">target</span>:
          <span class="at">type</span>: <span class="st">Utilization</span>
          <span class="at">averageUtilization</span>: <span class="nb">70</span>
    - <span class="at">type</span>: <span class="st">Pods</span>
      <span class="at">pods</span>:
        <span class="at">metric</span>:
          <span class="at">name</span>: <span class="st">http_requests_per_second</span>
        <span class="at">target</span>:
          <span class="at">type</span>: <span class="st">AverageValue</span>
          <span class="at">averageValue</span>: <span class="st">"100"</span></pre></div>
      </div>
    `
  },

  'helm-charts': {
    id: 'helm-charts',
    title: 'Helm Charts for Data Pipelines',
    category: 'Docker & Kubernetes',
    tags: ['helm', 'kubernetes', 'charts', 'deployment'],
    lastUpdated: '2025-07-06',
    body: `
      <h2>Helm Charts for Data Pipelines</h2>
      <p>Helm is the package manager for Kubernetes. Use it to template and deploy complex data platform components.</p>

      <h3>Helm Values for Airflow Deployment</h3>
      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-lang">YAML</span>
          <button class="code-copy-btn" onclick="copyCode(this)">📋 Copy</button>
        </div>
        <div class="code-content"><pre><span class="cm"># helm/airflow-values.yaml — Production Airflow on K8s</span>
<span class="at">executor</span>: <span class="st">KubernetesExecutor</span>

<span class="at">webserver</span>:
  <span class="at">replicas</span>: <span class="nb">2</span>
  <span class="at">resources</span>:
    <span class="at">requests</span>:
      <span class="at">memory</span>: <span class="st">"1Gi"</span>
      <span class="at">cpu</span>: <span class="st">"500m"</span>

<span class="at">scheduler</span>:
  <span class="at">replicas</span>: <span class="nb">2</span>
  <span class="at">resources</span>:
    <span class="at">requests</span>:
      <span class="at">memory</span>: <span class="st">"2Gi"</span>
      <span class="at">cpu</span>: <span class="st">"1000m"</span>

<span class="at">dags</span>:
  <span class="at">gitSync</span>:
    <span class="at">enabled</span>: <span class="nb">true</span>
    <span class="at">repo</span>: <span class="st">https://github.com/company/airflow-dags.git</span>
    <span class="at">branch</span>: <span class="st">main</span>
    <span class="at">wait</span>: <span class="nb">60</span>

<span class="at">config</span>:
  <span class="at">core</span>:
    <span class="at">dags_are_paused_at_creation</span>: <span class="st">"True"</span>
    <span class="at">max_active_runs_per_dag</span>: <span class="st">"3"</span>
  <span class="at">logging</span>:
    <span class="at">remote_logging</span>: <span class="st">"True"</span>
    <span class="at">remote_base_log_folder</span>: <span class="st">"s3://airflow-logs/"</span></pre></div>
      </div>
    `
  },

  // ─── 8. CLOUD DATA PLATFORMS ────────────────────────

  'aws-data-stack': {
    id: 'aws-data-stack',
    title: 'AWS Data Stack',
    category: 'Cloud Data Platforms',
    tags: ['aws', 'glue', 'redshift', 's3', 'cloud'],
    lastUpdated: '2025-07-10',
    body: `
      <h2>AWS Data Engineering Stack</h2>
      <p>AWS offers a comprehensive suite of managed services for building data pipelines at scale.</p>

      <div class="arch-diagram"><pre>
┌─────────────────── AWS DATA ARCHITECTURE ───────────────────┐
│                                                              │
│  SOURCES           INGESTION         STORAGE      SERVING    │
│  ┌────────┐       ┌──────────┐     ┌─────────┐  ┌────────┐ │
│  │ RDS    │──────▶│ Glue ETL │────▶│ S3      │─▶│Redshift│ │
│  │ DynamoDB│      │          │     │ (Lake)  │  │        │ │
│  │ API    │──────▶│ Kinesis  │     └─────────┘  └────────┘ │
│  │ Streams│      │ Data     │     ┌─────────┐  ┌────────┐ │
│  │ Files  │──────▶│ Streams  │────▶│ Glue    │─▶│ Athena │ │
│  └────────┘       └──────────┘     │ Catalog │  └────────┘ │
│                                    └─────────┘             │
│  ORCHESTRATION: AWS Step Functions / MWAA (Managed Airflow) │
│  MONITORING: CloudWatch / DataDog                           │
└─────────────────────────────────────────────────────────────┘
      </pre></div>

      <h3>AWS Glue ETL Job</h3>
      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-lang">Python</span>
          <button class="code-copy-btn" onclick="copyCode(this)">📋 Copy</button>
        </div>
        <div class="code-content"><pre><span class="cm"># AWS Glue ETL job — Serverless Spark</span>
<span class="kw">import</span> sys
<span class="kw">from</span> awsglue.transforms <span class="kw">import</span> *
<span class="kw">from</span> awsglue.utils <span class="kw">import</span> getResolvedOptions
<span class="kw">from</span> awsglue.context <span class="kw">import</span> GlueContext
<span class="kw">from</span> pyspark.context <span class="kw">import</span> SparkContext

args = getResolvedOptions(sys.argv, [<span class="st">"JOB_NAME"</span>, <span class="st">"source_db"</span>])
sc = SparkContext()
glueContext = GlueContext(sc)
spark = glueContext.spark_session

<span class="cm"># Read from Glue Data Catalog</span>
orders = glueContext.create_dynamic_frame.from_catalog(
    database=args[<span class="st">"source_db"</span>],
    table_name=<span class="st">"raw_orders"</span>,
)

<span class="cm"># Transform</span>
cleaned = orders.drop_fields([<span class="st">"_metadata"</span>])
filtered = Filter.apply(frame=cleaned,
    f=<span class="kw">lambda</span> x: x[<span class="st">"amount"</span>] > <span class="nb">0</span>)

<span class="cm"># Write to S3 as Parquet (partitioned)</span>
glueContext.write_dynamic_frame.from_options(
    frame=filtered,
    connection_type=<span class="st">"s3"</span>,
    format=<span class="st">"parquet"</span>,
    connection_options={
        <span class="st">"path"</span>: <span class="st">"s3://data-lake/processed/orders/"</span>,
        <span class="st">"partitionKeys"</span>: [<span class="st">"year"</span>, <span class="st">"month"</span>],
    },
)</pre></div>
      </div>
    `
  },

  'gcp-data-stack': {
    id: 'gcp-data-stack',
    title: 'GCP Data Stack',
    category: 'Cloud Data Platforms',
    tags: ['gcp', 'bigquery', 'dataflow', 'cloud'],
    lastUpdated: '2025-07-11',
    body: `
      <h2>GCP Data Engineering Stack</h2>
      <p>Google Cloud Platform offers some of the most powerful managed data services, with BigQuery as its crown jewel.</p>

      <h3>BigQuery SQL — Advanced Analytics</h3>
      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-lang">SQL</span>
          <button class="code-copy-btn" onclick="copyCode(this)">📋 Copy</button>
        </div>
        <div class="code-content"><pre><span class="cm">-- BigQuery: Customer cohort retention analysis</span>
<span class="kw">WITH</span> first_orders <span class="kw">AS</span> (
  <span class="kw">SELECT</span>
    customer_id,
    <span class="fn">DATE_TRUNC</span>(<span class="fn">MIN</span>(order_date), MONTH) <span class="kw">AS</span> cohort_month
  <span class="kw">FROM</span> <span class="st">\`project.analytics.fact_orders\`</span>
  <span class="kw">GROUP BY</span> customer_id
),
monthly_activity <span class="kw">AS</span> (
  <span class="kw">SELECT DISTINCT</span>
    o.customer_id,
    f.cohort_month,
    <span class="fn">DATE_TRUNC</span>(o.order_date, MONTH) <span class="kw">AS</span> active_month,
    <span class="fn">DATE_DIFF</span>(
      <span class="fn">DATE_TRUNC</span>(o.order_date, MONTH),
      f.cohort_month, MONTH
    ) <span class="kw">AS</span> months_since_first
  <span class="kw">FROM</span> <span class="st">\`project.analytics.fact_orders\`</span> o
  <span class="kw">JOIN</span> first_orders f <span class="kw">USING</span> (customer_id)
)
<span class="kw">SELECT</span>
  cohort_month,
  months_since_first,
  <span class="fn">COUNT</span>(<span class="kw">DISTINCT</span> customer_id) <span class="kw">AS</span> active_customers,
  <span class="fn">ROUND</span>(
    <span class="fn">COUNT</span>(<span class="kw">DISTINCT</span> customer_id) * <span class="nb">100.0</span> /
    <span class="fn">FIRST_VALUE</span>(<span class="fn">COUNT</span>(<span class="kw">DISTINCT</span> customer_id)) <span class="kw">OVER</span>(
      <span class="kw">PARTITION BY</span> cohort_month <span class="kw">ORDER BY</span> months_since_first
    ), <span class="nb">1</span>
  ) <span class="kw">AS</span> retention_pct
<span class="kw">FROM</span> monthly_activity
<span class="kw">GROUP BY</span> cohort_month, months_since_first
<span class="kw">ORDER BY</span> cohort_month, months_since_first;</pre></div>
      </div>
    `
  },

  'azure-data-stack': {
    id: 'azure-data-stack',
    title: 'Azure Data Stack',
    category: 'Cloud Data Platforms',
    tags: ['azure', 'synapse', 'data-factory', 'cloud'],
    lastUpdated: '2025-07-09',
    body: `
      <h2>Azure Data Engineering Stack</h2>
      <p>Microsoft Azure provides an integrated data platform with Synapse Analytics as the unified analytics service.</p>

      <h3>Azure Architecture Overview</h3>
      <table>
        <thead><tr><th>Component</th><th>Azure Service</th><th>Purpose</th></tr></thead>
        <tbody>
          <tr><td>Ingestion</td><td>Azure Data Factory</td><td>ETL/ELT orchestration with 100+ connectors</td></tr>
          <tr><td>Storage</td><td>ADLS Gen2</td><td>Scalable data lake storage</td></tr>
          <tr><td>Processing</td><td>Azure Synapse (Spark)</td><td>Big data processing</td></tr>
          <tr><td>Warehouse</td><td>Synapse SQL Pool</td><td>Enterprise data warehouse</td></tr>
          <tr><td>Streaming</td><td>Event Hubs + Stream Analytics</td><td>Real-time event processing</td></tr>
          <tr><td>ML</td><td>Azure ML Studio</td><td>Model training and deployment</td></tr>
        </tbody>
      </table>

      <div class="callout info">
        <div class="callout-title">💡 Azure Synapse Advantage</div>
        <div class="callout-body">Synapse Analytics unifies Spark, SQL, and Data Explorer in a single workspace, reducing the need to switch between services for different workloads.</div>
      </div>
    `
  },

  'multi-cloud': {
    id: 'multi-cloud',
    title: 'Multi-Cloud Data Architecture',
    category: 'Cloud Data Platforms',
    tags: ['multi-cloud', 'architecture', 'hybrid', 'portability'],
    lastUpdated: '2025-07-07',
    body: `
      <h2>Multi-Cloud Data Architecture</h2>
      <p>Strategies for building portable data platforms that work across cloud providers.</p>

      <h3>Portable Tech Stack</h3>
      <table>
        <thead><tr><th>Layer</th><th>Portable Option</th><th>Why Portable</th></tr></thead>
        <tbody>
          <tr><td>Storage Format</td><td>Apache Parquet + Iceberg</td><td>Open format, works on any cloud</td></tr>
          <tr><td>Processing</td><td>Apache Spark</td><td>Runs on EMR, Dataproc, Synapse, K8s</td></tr>
          <tr><td>Orchestration</td><td>Apache Airflow</td><td>MWAA, Cloud Composer, self-hosted</td></tr>
          <tr><td>Streaming</td><td>Apache Kafka</td><td>Confluent Cloud, MSK, Event Hubs</td></tr>
          <tr><td>Transformation</td><td>dbt</td><td>Works with any SQL warehouse</td></tr>
          <tr><td>Infrastructure</td><td>Terraform</td><td>Multi-cloud IaC</td></tr>
          <tr><td>Containers</td><td>Kubernetes</td><td>EKS, GKE, AKS</td></tr>
        </tbody>
      </table>

      <div class="callout warning">
        <div class="callout-title">⚠️ Multi-Cloud Pitfall</div>
        <div class="callout-body">Don't go multi-cloud just for the sake of it. It adds significant complexity. Use it when you have genuine requirements: regulatory compliance, vendor risk mitigation, or best-of-breed service selection.</div>
      </div>
    `
  },

  // ─── 9. PYTHON ─────────────────────────────────────

  'python-best-practices': {
    id: 'python-best-practices',
    title: 'Python Best Practices for Data Engineers',
    category: 'Python for Data & ML',
    tags: ['python', 'best-practices', 'clean-code'],
    lastUpdated: '2025-07-13',
    body: `
      <h2>Python Best Practices for Data Engineers</h2>
      <p>Write production-quality Python code with proper error handling, type hints, and project structure.</p>

      <h3>Production Project Structure</h3>
      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-lang">Bash</span>
          <button class="code-copy-btn" onclick="copyCode(this)">📋 Copy</button>
        </div>
        <div class="code-content"><pre>my_data_pipeline/
├── pyproject.toml           <span class="cm"># Modern Python packaging</span>
├── src/
│   └── pipeline/
│       ├── __init__.py
│       ├── config.py        <span class="cm"># Pydantic settings</span>
│       ├── extractors/      <span class="cm"># Data source connectors</span>
│       ├── transformers/    <span class="cm"># Business logic</span>
│       ├── loaders/         <span class="cm"># Destination writers</span>
│       └── utils/           <span class="cm"># Shared utilities</span>
├── tests/
│   ├── unit/
│   ├── integration/
│   └── conftest.py
├── Dockerfile
├── docker-compose.yml
└── .github/workflows/ci.yml</pre></div>
      </div>

      <h3>Pydantic Settings & Type-Safe Config</h3>
      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-lang">Python</span>
          <button class="code-copy-btn" onclick="copyCode(this)">📋 Copy</button>
        </div>
        <div class="code-content"><pre><span class="cm"># config.py — Type-safe configuration with Pydantic</span>
<span class="kw">from</span> pydantic_settings <span class="kw">import</span> BaseSettings
<span class="kw">from</span> pydantic <span class="kw">import</span> Field

<span class="kw">class</span> <span class="dc">DatabaseConfig</span>(BaseSettings):
    host: str = Field(default=<span class="st">"localhost"</span>)
    port: int = Field(default=<span class="nb">5432</span>)
    name: str = Field(alias=<span class="st">"DB_NAME"</span>)
    user: str = Field(alias=<span class="st">"DB_USER"</span>)
    password: str = Field(alias=<span class="st">"DB_PASSWORD"</span>)

    <span class="dc">@property</span>
    <span class="kw">def</span> <span class="fn">connection_string</span>(self) -> str:
        <span class="kw">return</span> <span class="st">f"postgresql://{self.user}:{self.password}@{self.host}:{self.port}/{self.name}"</span>

<span class="kw">class</span> <span class="dc">PipelineConfig</span>(BaseSettings):
    db: DatabaseConfig = DatabaseConfig()
    batch_size: int = <span class="nb">1000</span>
    max_retries: int = <span class="nb">3</span>
    log_level: str = <span class="st">"INFO"</span>

    model_config = {<span class="st">"env_prefix"</span>: <span class="st">"PIPELINE_"</span>}

config = PipelineConfig()</pre></div>
      </div>
    `
  },

  'pandas-polars': {
    id: 'pandas-polars',
    title: 'Pandas & Polars Performance',
    category: 'Python for Data & ML',
    tags: ['pandas', 'polars', 'performance', 'dataframes'],
    lastUpdated: '2025-07-14',
    body: `
      <h2>Pandas vs Polars Performance</h2>
      <p>Polars is a blazing-fast DataFrame library written in Rust that's 10-100x faster than Pandas for many operations.</p>

      <h3>Polars vs Pandas Comparison</h3>
      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-lang">Python</span>
          <button class="code-copy-btn" onclick="copyCode(this)">📋 Copy</button>
        </div>
        <div class="code-content"><pre><span class="cm"># Polars — Lazy evaluation, parallel execution, Rust-powered</span>
<span class="kw">import</span> polars <span class="kw">as</span> pl

<span class="cm"># Read and process 10M rows in seconds</span>
result = (
    pl.scan_parquet(<span class="st">"s3://data/events/*.parquet"</span>)   <span class="cm"># Lazy!</span>
    .filter(pl.col(<span class="st">"event_type"</span>) == <span class="st">"purchase"</span>)
    .with_columns([
        (pl.col(<span class="st">"amount"</span>) * pl.col(<span class="st">"quantity"</span>)).alias(<span class="st">"revenue"</span>),
        pl.col(<span class="st">"timestamp"</span>).dt.month().alias(<span class="st">"month"</span>),
    ])
    .group_by([<span class="st">"customer_id"</span>, <span class="st">"month"</span>])
    .agg([
        pl.col(<span class="st">"revenue"</span>).sum().alias(<span class="st">"total_revenue"</span>),
        pl.col(<span class="st">"order_id"</span>).n_unique().alias(<span class="st">"order_count"</span>),
    ])
    .sort(<span class="st">"total_revenue"</span>, descending=<span class="nb">True</span>)
    .collect()   <span class="cm"># Execute the optimized query plan</span>
)

print(result.head(<span class="nb">10</span>))</pre></div>
      </div>

      <table>
        <thead><tr><th>Feature</th><th>Pandas</th><th>Polars</th></tr></thead>
        <tbody>
          <tr><td>Speed</td><td>Baseline</td><td>10-100x faster</td></tr>
          <tr><td>Memory</td><td>High (copies data)</td><td>Low (zero-copy)</td></tr>
          <tr><td>Lazy Evaluation</td><td>No</td><td>Yes (query optimization)</td></tr>
          <tr><td>Multithreading</td><td>No (GIL limited)</td><td>Yes (Rust-native)</td></tr>
          <tr><td>Ecosystem</td><td>Mature & extensive</td><td>Growing rapidly</td></tr>
          <tr><td>Best For</td><td>Small-medium data, prototyping</td><td>Large data, production ETL</td></tr>
        </tbody>
      </table>
    `
  },

  'fastapi-data': {
    id: 'fastapi-data',
    title: 'Building Data APIs with FastAPI',
    category: 'Python for Data & ML',
    tags: ['fastapi', 'api', 'python', 'data-serving'],
    lastUpdated: '2025-07-12',
    body: `
      <h2>Data APIs with FastAPI</h2>
      <p>FastAPI is the modern Python framework for building high-performance APIs. It's ideal for serving data products and ML models.</p>

      <h3>Data Product API</h3>
      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-lang">Python</span>
          <button class="code-copy-btn" onclick="copyCode(this)">📋 Copy</button>
        </div>
        <div class="code-content"><pre><span class="cm"># data_api.py — Serving curated data products via API</span>
<span class="kw">from</span> fastapi <span class="kw">import</span> FastAPI, Query, HTTPException
<span class="kw">from</span> pydantic <span class="kw">import</span> BaseModel
<span class="kw">from</span> datetime <span class="kw">import</span> date
<span class="kw">from</span> typing <span class="kw">import</span> Optional
<span class="kw">import</span> duckdb

app = FastAPI(title=<span class="st">"Data Product API"</span>)
db = duckdb.connect(<span class="st">"data_products.duckdb"</span>)

<span class="kw">class</span> <span class="dc">RevenueMetrics</span>(BaseModel):
    date: date
    total_revenue: float
    order_count: int
    avg_order_value: float
    top_category: str

<span class="dc">@app.get</span>(<span class="st">"/api/v1/revenue"</span>, response_model=list[RevenueMetrics])
<span class="kw">async def</span> <span class="fn">get_revenue</span>(
    start_date: date = Query(..., description=<span class="st">"Start date"</span>),
    end_date: date = Query(..., description=<span class="st">"End date"</span>),
    category: Optional[str] = Query(<span class="nb">None</span>),
):
    <span class="st">"""Get daily revenue metrics for a date range."""</span>
    query = <span class="st">"""
        SELECT order_date, SUM(amount) as total_revenue,
               COUNT(*) as order_count,
               AVG(amount) as avg_order_value,
               MODE(category) as top_category
        FROM fact_orders
        WHERE order_date BETWEEN ? AND ?
    """</span>
    params = [start_date, end_date]
    <span class="kw">if</span> category:
        query += <span class="st">" AND category = ?"</span>
        params.append(category)
    query += <span class="st">" GROUP BY order_date ORDER BY order_date"</span>

    result = db.execute(query, params).fetchall()
    <span class="kw">return</span> [RevenueMetrics(
        date=r[<span class="nb">0</span>], total_revenue=r[<span class="nb">1</span>],
        order_count=r[<span class="nb">2</span>], avg_order_value=r[<span class="nb">3</span>],
        top_category=r[<span class="nb">4</span>],
    ) <span class="kw">for</span> r <span class="kw">in</span> result]</pre></div>
      </div>
    `
  },

  'testing-pipelines': {
    id: 'testing-pipelines',
    title: 'Testing Data Pipelines (pytest)',
    category: 'Python for Data & ML',
    tags: ['testing', 'pytest', 'data-quality', 'tdd'],
    lastUpdated: '2025-07-10',
    body: `
      <h2>Testing Data Pipelines</h2>
      <p>Production data pipelines need unit tests, integration tests, and data quality checks. Here's how to test with pytest.</p>

      <h3>Unit Testing Transformations</h3>
      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-lang">Python</span>
          <button class="code-copy-btn" onclick="copyCode(this)">📋 Copy</button>
        </div>
        <div class="code-content"><pre><span class="cm"># tests/test_transformers.py</span>
<span class="kw">import</span> pytest
<span class="kw">import</span> pandas <span class="kw">as</span> pd
<span class="kw">from</span> pipeline.transformers.orders <span class="kw">import</span> clean_orders, calculate_metrics

<span class="dc">@pytest.fixture</span>
<span class="kw">def</span> <span class="fn">sample_orders</span>():
    <span class="kw">return</span> pd.DataFrame({
        <span class="st">"order_id"</span>: [<span class="st">"A1"</span>, <span class="st">"A2"</span>, <span class="st">"A3"</span>, <span class="st">"A1"</span>],  <span class="cm"># A1 is duplicate</span>
        <span class="st">"amount"</span>: [<span class="nb">100.0</span>, <span class="nb">-50.0</span>, <span class="nb">200.0</span>, <span class="nb">100.0</span>],
        <span class="st">"status"</span>: [<span class="st">"completed"</span>, <span class="st">"cancelled"</span>, <span class="st">"completed"</span>, <span class="st">"completed"</span>],
    })

<span class="kw">def</span> <span class="fn">test_clean_orders_removes_duplicates</span>(sample_orders):
    result = clean_orders(sample_orders)
    <span class="kw">assert</span> len(result) == <span class="nb">3</span>  <span class="cm"># Duplicate A1 removed</span>

<span class="kw">def</span> <span class="fn">test_clean_orders_filters_negative_amounts</span>(sample_orders):
    result = clean_orders(sample_orders)
    <span class="kw">assert</span> (result[<span class="st">"amount"</span>] >= <span class="nb">0</span>).all()

<span class="kw">def</span> <span class="fn">test_calculate_metrics_correct_revenue</span>(sample_orders):
    metrics = calculate_metrics(clean_orders(sample_orders))
    <span class="kw">assert</span> metrics[<span class="st">"total_revenue"</span>] == <span class="nb">300.0</span>  <span class="cm"># 100 + 200</span>
    <span class="kw">assert</span> metrics[<span class="st">"order_count"</span>] == <span class="nb">2</span>       <span class="cm"># Only completed</span></pre></div>
      </div>
    `
  },

  // ─── 10. CI/CD & INFRASTRUCTURE ────────────────────

  'github-actions-pipelines': {
    id: 'github-actions-pipelines',
    title: 'GitHub Actions for Data Pipelines',
    category: 'CI/CD & Infrastructure',
    tags: ['github-actions', 'ci-cd', 'automation'],
    lastUpdated: '2025-07-15',
    body: `
      <h2>GitHub Actions for Data Pipelines</h2>
      <p>Automate testing, linting, and deployment of data pipelines with GitHub Actions.</p>

      <h3>Complete CI/CD Workflow</h3>
      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-lang">YAML</span>
          <button class="code-copy-btn" onclick="copyCode(this)">📋 Copy</button>
        </div>
        <div class="code-content"><pre><span class="cm"># .github/workflows/data-pipeline-ci.yml</span>
<span class="at">name</span>: <span class="st">Data Pipeline CI/CD</span>

<span class="at">on</span>:
  <span class="at">push</span>:
    <span class="at">branches</span>: [<span class="st">main</span>, <span class="st">develop</span>]
  <span class="at">pull_request</span>:
    <span class="at">branches</span>: [<span class="st">main</span>]

<span class="at">jobs</span>:
  <span class="at">lint-and-test</span>:
    <span class="at">runs-on</span>: <span class="st">ubuntu-latest</span>
    <span class="at">steps</span>:
      - <span class="at">uses</span>: <span class="st">actions/checkout@v4</span>

      - <span class="at">name</span>: <span class="st">Setup Python</span>
        <span class="at">uses</span>: <span class="st">actions/setup-python@v5</span>
        <span class="at">with</span>:
          <span class="at">python-version</span>: <span class="st">"3.11"</span>
          <span class="at">cache</span>: <span class="st">"pip"</span>

      - <span class="at">name</span>: <span class="st">Install dependencies</span>
        <span class="at">run</span>: <span class="st">pip install -e ".[dev]"</span>

      - <span class="at">name</span>: <span class="st">Lint with Ruff</span>
        <span class="at">run</span>: <span class="st">ruff check src/ tests/</span>

      - <span class="at">name</span>: <span class="st">Type check with mypy</span>
        <span class="at">run</span>: <span class="st">mypy src/</span>

      - <span class="at">name</span>: <span class="st">Run unit tests</span>
        <span class="at">run</span>: <span class="st">pytest tests/unit/ -v --cov=src --cov-report=xml</span>

  <span class="at">build-and-push</span>:
    <span class="at">needs</span>: <span class="st">lint-and-test</span>
    <span class="at">if</span>: <span class="st">github.ref == 'refs/heads/main'</span>
    <span class="at">runs-on</span>: <span class="st">ubuntu-latest</span>
    <span class="at">steps</span>:
      - <span class="at">uses</span>: <span class="st">actions/checkout@v4</span>

      - <span class="at">name</span>: <span class="st">Build Docker image</span>
        <span class="at">run</span>: |
          docker build -t pipeline:\${{ github.sha }} .
          docker tag pipeline:\${{ github.sha }} gcr.io/project/pipeline:latest
          docker push gcr.io/project/pipeline:latest

      - <span class="at">name</span>: <span class="st">Deploy to production</span>
        <span class="at">run</span>: |
          kubectl set image deployment/pipeline \\
            pipeline=gcr.io/project/pipeline:\${{ github.sha }}</pre></div>
      </div>
    `
  },

  'terraform-data': {
    id: 'terraform-data',
    title: 'Terraform for Data Infrastructure',
    category: 'CI/CD & Infrastructure',
    tags: ['terraform', 'iac', 'infrastructure', 'cloud'],
    lastUpdated: '2025-07-11',
    body: `
      <h2>Terraform for Data Infrastructure</h2>
      <p>Infrastructure as Code (IaC) with Terraform ensures reproducible, version-controlled data platform deployments.</p>

      <h3>Terraform — Data Lake Infrastructure (AWS)</h3>
      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-lang">HCL</span>
          <button class="code-copy-btn" onclick="copyCode(this)">📋 Copy</button>
        </div>
        <div class="code-content"><pre><span class="cm"># main.tf — AWS Data Lake infrastructure</span>

<span class="cm"># S3 Data Lake buckets</span>
<span class="kw">resource</span> <span class="st">"aws_s3_bucket"</span> <span class="st">"data_lake"</span> {
  <span class="kw">for_each</span> = toset([<span class="st">"raw"</span>, <span class="st">"processed"</span>, <span class="st">"curated"</span>])
  bucket   = <span class="st">"\${var.project}-datalake-\${each.key}"</span>

  tags = {
    Environment = var.environment
    ManagedBy   = <span class="st">"terraform"</span>
    Team        = <span class="st">"data-engineering"</span>
  }
}

<span class="cm"># Glue Catalog Database</span>
<span class="kw">resource</span> <span class="st">"aws_glue_catalog_database"</span> <span class="st">"analytics"</span> {
  name = <span class="st">"analytics"</span>
}

<span class="cm"># Redshift Serverless</span>
<span class="kw">resource</span> <span class="st">"aws_redshiftserverless_namespace"</span> <span class="st">"warehouse"</span> {
  namespace_name     = <span class="st">"\${var.project}-warehouse"</span>
  admin_username     = <span class="st">"admin"</span>
  admin_user_password = var.redshift_password
  db_name            = <span class="st">"analytics"</span>
}

<span class="kw">resource</span> <span class="st">"aws_redshiftserverless_workgroup"</span> <span class="st">"default"</span> {
  namespace_name = aws_redshiftserverless_namespace.warehouse.namespace_name
  workgroup_name = <span class="st">"\${var.project}-workgroup"</span>
  base_capacity  = <span class="nb">32</span>  <span class="cm"># RPUs</span>
}

<span class="cm"># IAM Role for Glue jobs</span>
<span class="kw">resource</span> <span class="st">"aws_iam_role"</span> <span class="st">"glue_role"</span> {
  name = <span class="st">"\${var.project}-glue-role"</span>

  assume_role_policy = jsonencode({
    Version = <span class="st">"2012-10-17"</span>
    Statement = [{
      Action = <span class="st">"sts:AssumeRole"</span>
      Effect = <span class="st">"Allow"</span>
      Principal = { Service = <span class="st">"glue.amazonaws.com"</span> }
    }]
  })
}</pre></div>
      </div>
    `
  },

  'dataops': {
    id: 'dataops',
    title: 'DataOps Practices',
    category: 'CI/CD & Infrastructure',
    tags: ['dataops', 'practices', 'automation', 'quality'],
    lastUpdated: '2025-07-08',
    body: `
      <h2>DataOps Practices</h2>
      <p>DataOps applies DevOps principles to data engineering — automating the development, testing, and deployment of data pipelines for faster, more reliable delivery.</p>

      <h3>DataOps Principles</h3>
      <ul>
        <li><strong>Version Control Everything</strong> — Code, configs, schemas, and data models</li>
        <li><strong>Automated Testing</strong> — Unit tests, integration tests, and data quality checks</li>
        <li><strong>CI/CD Pipelines</strong> — Automated build, test, and deploy workflows</li>
        <li><strong>Monitoring & Observability</strong> — Track data freshness, quality, and pipeline health</li>
        <li><strong>Infrastructure as Code</strong> — Reproducible environments with Terraform/Pulumi</li>
        <li><strong>Self-Service</strong> — Enable data consumers to access data independently</li>
      </ul>

      <h3>Data Quality Framework</h3>
      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-lang">Python</span>
          <button class="code-copy-btn" onclick="copyCode(this)">📋 Copy</button>
        </div>
        <div class="code-content"><pre><span class="cm"># data_quality/checks.py — Great Expectations-style data quality</span>
<span class="kw">from</span> dataclasses <span class="kw">import</span> dataclass
<span class="kw">from</span> typing <span class="kw">import</span> Any
<span class="kw">import</span> pandas <span class="kw">as</span> pd

<span class="dc">@dataclass</span>
<span class="kw">class</span> <span class="dc">QualityCheckResult</span>:
    check_name: str
    passed: bool
    details: str

<span class="kw">class</span> <span class="dc">DataQualityChecker</span>:
    <span class="kw">def</span> <span class="fn">__init__</span>(self, df: pd.DataFrame):
        self.df = df
        self.results: list[QualityCheckResult] = []

    <span class="kw">def</span> <span class="fn">expect_no_nulls</span>(self, column: str):
        null_count = self.df[column].isnull().sum()
        self.results.append(QualityCheckResult(
            check_name=<span class="st">f"no_nulls_{column}"</span>,
            passed=null_count == <span class="nb">0</span>,
            details=<span class="st">f"Found {null_count} nulls in {column}"</span>,
        ))
        <span class="kw">return</span> self

    <span class="kw">def</span> <span class="fn">expect_unique</span>(self, column: str):
        dup_count = self.df[column].duplicated().sum()
        self.results.append(QualityCheckResult(
            check_name=<span class="st">f"unique_{column}"</span>,
            passed=dup_count == <span class="nb">0</span>,
            details=<span class="st">f"Found {dup_count} duplicates in {column}"</span>,
        ))
        <span class="kw">return</span> self

    <span class="kw">def</span> <span class="fn">expect_values_in_range</span>(self, column: str, min_val, max_val):
        out_of_range = ((self.df[column] < min_val) |
                        (self.df[column] > max_val)).sum()
        self.results.append(QualityCheckResult(
            check_name=<span class="st">f"range_{column}"</span>,
            passed=out_of_range == <span class="nb">0</span>,
            details=<span class="st">f"{out_of_range} values out of [{min_val}, {max_val}]"</span>,
        ))
        <span class="kw">return</span> self

    <span class="kw">def</span> <span class="fn">validate</span>(self) -> bool:
        failed = [r <span class="kw">for</span> r <span class="kw">in</span> self.results <span class="kw">if not</span> r.passed]
        <span class="kw">if</span> failed:
            <span class="kw">for</span> f <span class="kw">in</span> failed:
                print(<span class="st">f"❌ {f.check_name}: {f.details}"</span>)
            <span class="kw">raise</span> ValueError(<span class="st">f"{len(failed)} quality checks failed!"</span>)
        print(<span class="st">f"✅ All {len(self.results)} checks passed!"</span>)
        <span class="kw">return</span> <span class="nb">True</span>

<span class="cm"># Usage</span>
checker = DataQualityChecker(orders_df)
checker.expect_no_nulls(<span class="st">"order_id"</span>) \\
       .expect_unique(<span class="st">"order_id"</span>) \\
       .expect_values_in_range(<span class="st">"amount"</span>, <span class="nb">0</span>, <span class="nb">100000</span>) \\
       .validate()</pre></div>
      </div>
    `
  },

  'monitoring-prometheus-grafana': {
    id: 'monitoring-prometheus-grafana',
    title: 'Monitoring with Prometheus & Grafana',
    category: 'CI/CD & Infrastructure',
    tags: ['monitoring', 'prometheus', 'grafana', 'observability'],
    lastUpdated: '2025-07-14',
    body: `
      <h2>Monitoring with Prometheus & Grafana</h2>
      <p>Prometheus collects metrics, Grafana visualizes them. Together they form the standard observability stack for data platforms.</p>

      <h3>Python Metrics for Data Pipelines</h3>
      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-lang">Python</span>
          <button class="code-copy-btn" onclick="copyCode(this)">📋 Copy</button>
        </div>
        <div class="code-content"><pre><span class="cm"># metrics.py — Prometheus metrics for data pipeline monitoring</span>
<span class="kw">from</span> prometheus_client <span class="kw">import</span> (
    Counter, Histogram, Gauge, start_http_server
)
<span class="kw">import</span> time, functools

<span class="cm"># Define metrics</span>
RECORDS_PROCESSED = Counter(
    <span class="st">"pipeline_records_processed_total"</span>,
    <span class="st">"Total records processed"</span>,
    [<span class="st">"pipeline"</span>, <span class="st">"stage"</span>],
)

PIPELINE_DURATION = Histogram(
    <span class="st">"pipeline_duration_seconds"</span>,
    <span class="st">"Pipeline execution duration"</span>,
    [<span class="st">"pipeline"</span>],
    buckets=[<span class="nb">30</span>, <span class="nb">60</span>, <span class="nb">120</span>, <span class="nb">300</span>, <span class="nb">600</span>, <span class="nb">1800</span>, <span class="nb">3600</span>],
)

DATA_FRESHNESS = Gauge(
    <span class="st">"pipeline_data_freshness_seconds"</span>,
    <span class="st">"Seconds since last successful pipeline run"</span>,
    [<span class="st">"pipeline"</span>],
)

PIPELINE_ERRORS = Counter(
    <span class="st">"pipeline_errors_total"</span>,
    <span class="st">"Total pipeline errors"</span>,
    [<span class="st">"pipeline"</span>, <span class="st">"error_type"</span>],
)

<span class="kw">def</span> <span class="fn">track_pipeline</span>(pipeline_name):
    <span class="st">"""Decorator to track pipeline execution metrics."""</span>
    <span class="kw">def</span> <span class="fn">decorator</span>(func):
        <span class="dc">@functools.wraps</span>(func)
        <span class="kw">def</span> <span class="fn">wrapper</span>(*args, **kwargs):
            <span class="kw">with</span> PIPELINE_DURATION.labels(
                pipeline=pipeline_name).time():
                <span class="kw">try</span>:
                    result = func(*args, **kwargs)
                    DATA_FRESHNESS.labels(
                        pipeline=pipeline_name).set_to_current_time()
                    <span class="kw">return</span> result
                <span class="kw">except</span> Exception <span class="kw">as</span> e:
                    PIPELINE_ERRORS.labels(
                        pipeline=pipeline_name,
                        error_type=type(e).__name__
                    ).inc()
                    <span class="kw">raise</span>
        <span class="kw">return</span> wrapper
    <span class="kw">return</span> decorator

<span class="cm"># Usage</span>
<span class="dc">@track_pipeline</span>(<span class="st">"orders_etl"</span>)
<span class="kw">def</span> <span class="fn">run_orders_pipeline</span>():
    <span class="cm"># ... pipeline logic</span>
    RECORDS_PROCESSED.labels(
        pipeline=<span class="st">"orders_etl"</span>, stage=<span class="st">"extract"</span>).inc(<span class="nb">5000</span>)

<span class="cm"># Start metrics server on port 9090</span>
start_http_server(<span class="nb">9090</span>)
run_orders_pipeline()</pre></div>
      </div>
    `
  },
  
  // ─── NEW NOTES WITH REAL-TIME EXAMPLES ─────────────────
  
  'snowflake-architecture': {
    id: 'snowflake-architecture',
    title: 'Snowflake Architecture & Snowpipe',
    category: 'Data Warehouse (Snowflake)',
    tags: ['snowflake', 'data-warehouse', 'snowpipe', 'real-time'],
    lastUpdated: '2025-07-17',
    body: `
      <h2>Snowflake Architecture & Real-Time Ingestion</h2>
      <p>Snowflake separates compute from storage. It consists of Database Storage, Virtual Warehouses (compute), and Cloud Services.</p>

      <h3>Real-time Data Ingestion with Snowpipe</h3>
      <p>Snowpipe loads data as soon as it's staged (e.g., lands in an S3 bucket). It uses serverless compute.</p>

      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-lang">SQL</span>
          <button class="code-copy-btn" onclick="copyCode(this)">📋 Copy</button>
        </div>
        <div class="code-content"><pre><span class="cm">-- 1. Create a stage for the S3 bucket</span>
<span class="kw">CREATE OR REPLACE STAGE</span> my_s3_stage
  <span class="kw">URL</span>=<span class="st">'s3://mybucket/data/'</span>
  <span class="kw">CREDENTIALS</span>=(AWS_ROLE=<span class="st">'arn:aws:iam::001234567890:role/myrole'</span>)
  <span class="kw">FILE_FORMAT</span> = (TYPE = JSON);

<span class="cm">-- 2. Create the target table</span>
<span class="kw">CREATE OR REPLACE TABLE</span> raw_events (
  event_data VARIANT,
  loaded_at <span class="nb">TIMESTAMP DEFAULT</span> CURRENT_TIMESTAMP()
);

<span class="cm">-- 3. Create the Snowpipe</span>
<span class="kw">CREATE OR REPLACE PIPE</span> my_snowpipe 
  <span class="kw">AUTO_INGEST</span> = <span class="nb">TRUE</span> 
<span class="kw">AS</span> 
  <span class="kw">COPY INTO</span> raw_events(event_data)
  <span class="kw">FROM</span> @my_s3_stage;

<span class="cm">-- Verify pipe status</span>
<span class="kw">SYSTEM</span>$PIPE_STATUS('my_snowpipe');</pre></div>
      </div>
      
      <div class="callout tip">
        <div class="callout-title">💡 Real-time Alerting Setup</div>
        <div class="callout-body">Once the pipe is created, configure an AWS SQS queue or EventBridge rule to trigger the Snowpipe REST API automatically when new files arrive in S3.</div>
      </div>
    `
  },

  'sql-genai-rag': {
    id: 'sql-genai-rag',
    title: 'Text-to-SQL GenAI & RAG',
    category: 'SQL GenAI & LLMOps',
    tags: ['llm', 'genai', 'rag', 'sql', 'llmops'],
    lastUpdated: '2025-07-17',
    body: `
      <h2>Building Text-to-SQL GenAI with RAG</h2>
      <p>LLMs can generate SQL queries from natural language, but they need context about your database schema. We use Retrieval-Augmented Generation (RAG) to provide this context.</p>

      <h3>Real-time Example: LangChain SQL Agent</h3>
      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-lang">Python</span>
          <button class="code-copy-btn" onclick="copyCode(this)">📋 Copy</button>
        </div>
        <div class="code-content"><pre><span class="cm"># text_to_sql.py - GenAI answering business questions in real-time</span>
<span class="kw">from</span> langchain.utilities <span class="kw">import</span> SQLDatabase
<span class="kw">from</span> langchain.llms <span class="kw">import</span> OpenAI
<span class="kw">from</span> langchain_experimental.sql <span class="kw">import</span> SQLDatabaseChain
<span class="kw">import</span> os

<span class="cm"># Connect to Data Warehouse (e.g., Snowflake, Postgres)</span>
db = SQLDatabase.from_uri(<span class="st">"postgresql+psycopg2://user:pass@localhost:5432/analytics"</span>)

<span class="cm"># Initialize LLM</span>
llm = OpenAI(temperature=<span class="nb">0</span>, verbose=<span class="nb">True</span>, openai_api_key=os.environ[<span class="st">"OPENAI_API_KEY"</span>])

<span class="cm"># Create the Text-to-SQL Chain</span>
db_chain = SQLDatabaseChain.from_llm(llm, db, verbose=<span class="nb">True</span>)

<span class="cm"># Real-time Question Answering</span>
user_question = <span class="st">"What were the top 3 product categories by revenue last month?"</span>
response = db_chain.run(user_question)

print(<span class="st">f"Answer: {response}"</span>)
<span class="cm"># Behind the scenes:</span>
<span class="cm"># 1. LLM analyzes the schema</span>
<span class="cm"># 2. Generates: SELECT category, SUM(amount) FROM sales ...</span>
<span class="cm"># 3. Executes the query safely</span>
<span class="cm"># 4. Formats the results into a human-readable answer</span></pre></div>
      </div>
    `
  },

  'airflow-data-quality': {
    id: 'airflow-data-quality',
    title: 'Data Quality Checks DAG',
    category: 'Apache Airflow & Orchestration',
    tags: ['airflow', 'data-quality', 'great-expectations', 'pipeline'],
    lastUpdated: '2025-07-17',
    body: `
      <h2>Integrating Data Quality Checks in Airflow</h2>
      <p>Data pipelines should fail fast if the incoming data is corrupted. Great Expectations integrates seamlessly into Airflow DAGs.</p>

      <h3>Real-time Example: Validation Before Load</h3>
      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-lang">Python</span>
          <button class="code-copy-btn" onclick="copyCode(this)">📋 Copy</button>
        </div>
        <div class="code-content"><pre><span class="cm"># dag_with_quality_checks.py</span>
<span class="kw">from</span> airflow <span class="kw">import</span> DAG
<span class="kw">from</span> datetime <span class="kw">import</span> datetime
<span class="kw">from</span> airflow.providers.snowflake.operators.snowflake <span class="kw">import</span> SnowflakeOperator
<span class="kw">from</span> great_expectations_provider.operators.great_expectations <span class="kw">import</span> GreatExpectationsOperator

<span class="kw">with</span> DAG(<span class="st">'load_and_validate_users'</span>, start_date=datetime(<span class="nb">2025</span>, <span class="nb">1</span>, <span class="nb">1</span>), schedule_interval=<span class="st">'@daily'</span>) <span class="kw">as</span> dag:
    
    <span class="cm"># Load data to a staging table</span>
    load_to_staging = SnowflakeOperator(
        task_id=<span class="st">'load_to_staging'</span>,
        sql=<span class="st">"COPY INTO stg_users FROM @s3_stage/users.csv"</span>,
        snowflake_conn_id=<span class="st">'snowflake_default'</span>
    )

    <span class="cm"># Run Great Expectations validation suite</span>
    validate_data = GreatExpectationsOperator(
        task_id=<span class="st">'validate_staging_data'</span>,
        data_context_root_dir=<span class="st">'/usr/local/airflow/great_expectations'</span>,
        expectation_suite_name=<span class="st">'users.staging_checks'</span>,
        data_asset_name=<span class="st">'stg_users'</span>,
        fail_task_on_validation_failure=<span class="nb">True</span>
    )

    <span class="cm"># Merge into final production table ONLY if validation passes</span>
    merge_to_prod = SnowflakeOperator(
        task_id=<span class="st">'merge_to_prod'</span>,
        sql=<span class="st">"""
        MERGE INTO prod_users p USING stg_users s
        ON p.id = s.id
        WHEN MATCHED THEN UPDATE SET p.email = s.email
        WHEN NOT MATCHED THEN INSERT (id, email) VALUES (s.id, s.email)
        """</span>,
        snowflake_conn_id=<span class="st">'snowflake_default'</span>
    )

    load_to_staging >> validate_data >> merge_to_prod</pre></div>
      </div>
    `
  },

  'kafka-fraud-detection': {
    id: 'kafka-fraud-detection',
    title: 'Real-time Fraud Detection Pipeline',
    category: 'Apache Kafka & Streaming',
    tags: ['kafka', 'streaming', 'fraud-detection', 'faust', 'python'],
    lastUpdated: '2025-07-17',
    body: `
      <h2>Real-time Fraud Detection with Kafka & Faust</h2>
      <p>Streaming applications often need to maintain state to detect patterns like "multiple logins from different countries in 5 minutes".</p>

      <h3>Python Faust Streaming App</h3>
      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-lang">Python</span>
          <button class="code-copy-btn" onclick="copyCode(this)">📋 Copy</button>
        </div>
        <div class="code-content"><pre><span class="cm"># fraud_detector.py using Faust (Python Kafka Streams equivalent)</span>
<span class="kw">import</span> faust
<span class="kw">from</span> datetime <span class="kw">import</span> timedelta

app = faust.App(<span class="st">'fraud_detection_app'</span>, broker=<span class="st">'kafka://kafka:9092'</span>)

<span class="kw">class</span> <span class="dc">Transaction</span>(faust.Record, serializer=<span class="st">'json'</span>):
    account_id: str
    amount: float
    location: str

transactions_topic = app.topic(<span class="st">'transactions'</span>, value_type=Transaction)
fraud_alerts_topic = app.topic(<span class="st">'fraud_alerts'</span>)

<span class="cm"># Maintain state: Total spent per account in a 1-hour window</span>
spend_table = app.Table(<span class="st">'spend_by_account'</span>, default=float) \
                 .tumbling(<span class="nb">timedelta(hours=1)</span>, expires=<span class="nb">timedelta(hours=2)</span>)

<span class="dc">@app.agent</span>(transactions_topic)
<span class="kw">async def</span> <span class="fn">detect_fraud</span>(transactions):
    <span class="kw">async for</span> tx <span class="kw">in</span> transactions.group_by(Transaction.account_id):
        <span class="cm"># Add current transaction amount to the window</span>
        current_spend = spend_table[tx.account_id].value() + tx.amount
        spend_table[tx.account_id] = current_spend

        <span class="cm"># Rule: Flag if spending exceeds $5000 in the 1-hour window</span>
        <span class="kw">if</span> current_spend > <span class="nb">5000</span>:
            alert = {
                <span class="st">"account_id"</span>: tx.account_id,
                <span class="st">"total_spend"</span>: current_spend,
                <span class="st">"reason"</span>: <span class="st">"Velocity limits exceeded"</span>
            }
            <span class="kw">await</span> fraud_alerts_topic.send(key=tx.account_id, value=alert)
            print(<span class="st">f"🚨 Fraud Alert Sent: {alert}"</span>)</pre></div>
      </div>
    `
  },

  'spark-log-analysis': {
    id: 'spark-log-analysis',
    title: 'Streaming Log Analysis',
    category: 'Apache Spark & Big Data',
    tags: ['spark', 'streaming', 'logs', 'analytics'],
    lastUpdated: '2025-07-17',
    body: `
      <h2>Real-time Log Analysis with PySpark</h2>
      <p>Parsing web server logs in real-time to detect traffic spikes or 404 errors using Spark Structured Streaming.</p>

      <h3>Real-time Log Parser</h3>
      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-lang">Python</span>
          <button class="code-copy-btn" onclick="copyCode(this)">📋 Copy</button>
        </div>
        <div class="code-content"><pre><span class="cm"># log_analyzer.py</span>
<span class="kw">from</span> pyspark.sql <span class="kw">import</span> SparkSession
<span class="kw">from</span> pyspark.sql.functions <span class="kw">import</span> regexp_extract, window, col

spark = SparkSession.builder.appName(<span class="st">"LogAnalyzer"</span>).getOrCreate()

<span class="cm"># Read streaming text from a socket (or Kafka)</span>
lines = spark.readStream.format(<span class="st">"socket"</span>).option(<span class="st">"host"</span>, <span class="st">"localhost"</span>).option(<span class="st">"port"</span>, <span class="nb">9999</span>).load()

<span class="cm"># Apache Log Pattern</span>
host_pattern = <span class="st">r'(^\S+\.[\S+\.]+\S+)\s'</span>
ts_pattern = <span class="st">r'\[(\d{2}/\w{3}/\d{4}:\d{2}:\d{2}:\d{2} -\d{4})\]'</span>
status_pattern = <span class="st">r'\s(\d{3})\s'</span>

<span class="cm"># Parse the logs</span>
parsed_logs = lines.select(
    regexp_extract(<span class="st">'value'</span>, host_pattern, <span class="nb">1</span>).alias(<span class="st">'host'</span>),
    regexp_extract(<span class="st">'value'</span>, status_pattern, <span class="nb">1</span>).cast(<span class="st">'integer'</span>).alias(<span class="st">'status'</span>)
)

<span class="cm"># Calculate errors per host in a sliding window</span>
error_counts = parsed_logs \
    .filter(col(<span class="st">'status'</span>) >= <span class="nb">400</span>) \
    .groupBy(<span class="st">'host'</span>) \
    .count() \
    .orderBy(col(<span class="st">'count'</span>).desc())

<span class="cm"># Output to console in real-time</span>
query = error_counts.writeStream \
    .outputMode(<span class="st">"complete"</span>) \
    .format(<span class="st">"console"</span>) \
    .start()

query.awaitTermination()</pre></div>
      </div>
    `
  },

  'dbt-advanced-macros': {
    id: 'dbt-advanced-macros',
    title: 'Advanced Macros & Jinja',
    category: 'dbt & Data Transformation',
    tags: ['dbt', 'macros', 'jinja', 'automation'],
    lastUpdated: '2025-07-17',
    body: `
      <h2>Advanced dbt Macros & Jinja</h2>
      <p>Macros in dbt allow you to use Jinja to write reusable, dynamic SQL, reducing boilerplate and increasing maintainability.</p>

      <h3>Real-time Example: Dynamic Pivoting</h3>
      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-lang">Jinja</span>
          <button class="code-copy-btn" onclick="copyCode(this)">📋 Copy</button>
        </div>
        <div class="code-content"><pre><span class="cm">{# macros/pivot_events.sql #}</span>
{% macro pivot_events(table_name, category_col, value_col) %}

    <span class="cm">{# Fetch unique categories dynamically #}</span>
    {% set get_categories_query %}
        SELECT DISTINCT {{ category_col }} FROM {{ table_name }}
    {% endset %}

    {% set results = run_query(get_categories_query) %}
    
    {% if execute %}
        {% set categories = results.columns[0].values() %}
    {% else %}
        {% set categories = [] %}
    {% endif %}

    SELECT
        user_id,
        {% for cat in categories %}
        SUM(CASE WHEN {{ category_col }} = '{{ cat }}' THEN {{ value_col }} ELSE 0 END) as {{ cat | replace(' ', '_') | lower }}_amount
        {% if not loop.last %},{% endif %}
        {% endfor %}
    FROM {{ table_name }}
    GROUP BY user_id

{% endmacro %}</pre></div>
      </div>
      
      <p>Usage in a model:</p>
      <div class="code-block">
        <div class="code-content"><pre><span class="cm">-- models/marts/user_spend_pivoted.sql</span>
{{ pivot_events(ref('stg_transactions'), 'event_type', 'amount') }}</pre></div>
      </div>
    `
  },

  'docker-mlops-stack': {
    id: 'docker-mlops-stack',
    title: 'Complete MLOps Stack',
    category: 'Docker & Kubernetes',
    tags: ['docker', 'docker-compose', 'mlops', 'mlflow', 'postgres'],
    lastUpdated: '2025-07-17',
    body: `
      <h2>Docker Compose for Complete MLOps Stack</h2>
      <p>Stand up a local MLOps environment in seconds with MLflow, Postgres (backend store), and MinIO (artifact store).</p>

      <h3>docker-compose.yml</h3>
      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-lang">YAML</span>
          <button class="code-copy-btn" onclick="copyCode(this)">📋 Copy</button>
        </div>
        <div class="code-content"><pre><span class="cm"># docker-compose.yml</span>
<span class="at">version</span>: <span class="st">'3.8'</span>

<span class="at">services</span>:
  <span class="at">db</span>:
    <span class="at">image</span>: <span class="st">postgres:13</span>
    <span class="at">environment</span>:
      - <span class="st">POSTGRES_USER=mlflow</span>
      - <span class="st">POSTGRES_PASSWORD=mlflow</span>
      - <span class="st">POSTGRES_DB=mlflow</span>
    <span class="at">volumes</span>:
      - <span class="st">pg_data:/var/lib/postgresql/data</span>

  <span class="at">minio</span>:
    <span class="at">image</span>: <span class="st">minio/minio:latest</span>
    <span class="at">command</span>: <span class="st">server /data --console-address ":9001"</span>
    <span class="at">environment</span>:
      - <span class="st">MINIO_ROOT_USER=admin</span>
      - <span class="st">MINIO_ROOT_PASSWORD=password</span>
    <span class="at">ports</span>:
      - <span class="st">"9000:9000"</span>
      - <span class="st">"9001:9001"</span>
    <span class="at">volumes</span>:
      - <span class="st">minio_data:/data</span>

  <span class="at">mlflow</span>:
    <span class="at">image</span>: <span class="st">ghcr.io/mlflow/mlflow:latest</span>
    <span class="at">ports</span>:
      - <span class="st">"5000:5000"</span>
    <span class="at">environment</span>:
      - <span class="st">AWS_ACCESS_KEY_ID=admin</span>
      - <span class="st">AWS_SECRET_ACCESS_KEY=password</span>
      - <span class="st">MLFLOW_S3_ENDPOINT_URL=http://minio:9000</span>
    <span class="at">command</span>: >
      mlflow server
      --backend-store-uri postgresql://mlflow:mlflow@db:5432/mlflow
      --default-artifact-root s3://mlflow-artifacts/
      --host 0.0.0.0
    <span class="at">depends_on</span>:
      - <span class="st">db</span>
      - <span class="st">minio</span>

<span class="at">volumes</span>:
  <span class="at">pg_data</span>:
  <span class="at">minio_data</span>:
</pre></div>
      </div>
    `
  },

  'python-asyncio': {
    id: 'python-asyncio',
    title: 'High-Performance Asyncio',
    category: 'Python for Data & ML',
    tags: ['python', 'asyncio', 'api', 'performance'],
    lastUpdated: '2025-07-17',
    body: `
      <h2>High-Performance Data Extraction with Asyncio</h2>
      <p>When fetching data from multiple APIs, synchronous requests block execution. <code>asyncio</code> allows concurrent requests, drastically reducing extraction time.</p>

      <h3>Real-time Example: Concurrent API Fetching</h3>
      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-lang">Python</span>
          <button class="code-copy-btn" onclick="copyCode(this)">📋 Copy</button>
        </div>
        <div class="code-content"><pre><span class="cm"># async_extractor.py</span>
<span class="kw">import</span> asyncio
<span class="kw">import</span> aiohttp
<span class="kw">import</span> time

<span class="kw">async def</span> <span class="fn">fetch_data</span>(session, url, user_id):
    <span class="st">"""Fetch data for a single user."""</span>
    <span class="kw">async with</span> session.get(<span class="st">f"{url}/{user_id}"</span>) <span class="kw">as</span> response:
        <span class="kw">if</span> response.status == <span class="nb">200</span>:
            data = <span class="kw">await</span> response.json()
            print(<span class="st">f"Fetched user {user_id}"</span>)
            <span class="kw">return</span> data
        <span class="kw">return None</span>

<span class="kw">async def</span> <span class="fn">main</span>():
    url = <span class="st">"https://jsonplaceholder.typicode.com/users"</span>
    user_ids = list(range(<span class="nb">1</span>, <span class="nb">51</span>)) <span class="cm"># Fetch 50 users</span>
    
    start_time = time.time()
    
    <span class="cm"># Use aiohttp ClientSession for connection pooling</span>
    <span class="kw">async with</span> aiohttp.ClientSession() <span class="kw">as</span> session:
        <span class="cm"># Create a list of tasks</span>
        tasks = [fetch_data(session, url, uid) <span class="kw">for</span> uid <span class="kw">in</span> user_ids]
        
        <span class="cm"># Run tasks concurrently</span>
        results = <span class="kw">await</span> asyncio.gather(*tasks)
        
    end_time = time.time()
    print(<span class="st">f"Fetched {len([r for r in results if r])} records in {end_time - start_time:.2f} seconds"</span>)

<span class="kw">if</span> __name__ == <span class="st">"__main__"</span>:
    asyncio.run(main())</pre></div>
      </div>
    `
  }
};

// Navigation structure for sidebar
const NAV_STRUCTURE = [
  {
    title: 'AI Agents & Tool Engineering',
    icon: '🔌',
    children: [
      { id: 'ai-architecture-stack', title: 'AI Architecture Stack', icon: '📄' },
      { id: 'build-ai-gateway', title: 'Build Your Own AI Gateway', icon: '📄' },
      { id: 'mcp-tool-engineering', title: 'Model Context Protocol (MCP)', icon: '📄' },
    ]
  },
  {
    title: 'Forward Deployment Engineering',
    icon: '🌉',
    children: [
      { id: 'large-model-deployment', title: 'Large Model Deployment', icon: '📄' },
      { id: 'fde-lifecycle', title: 'Forward Deployment Engineer Lifecycle', icon: '📄' },
    ]
  },
  {
    title: 'Data Engineering Fundamentals',
    icon: '🏗️',
    children: [
      { id: 'de-fundamentals', title: 'What is Data Engineering?', icon: '📄' },
      { id: 'de-lifecycle', title: 'Data Engineering Lifecycle', icon: '📄' },
      { id: 'etl-vs-elt', title: 'ETL vs ELT Pipelines', icon: '📄' },
      { id: 'data-modeling', title: 'Data Modeling (Star & Snowflake)', icon: '📄' },
      { id: 'data-lakes-vs-warehouses', title: 'Data Lakes vs Warehouses', icon: '📄' },
      { id: 'batch-vs-stream', title: 'Batch vs Stream Processing', icon: '📄' },
    ]
  },
  {
    title: 'Apache Spark & Big Data',
    icon: '⚡',
    children: [
      { id: 'spark-log-analysis', title: 'Streaming Log Analysis', icon: '📄' },
      { id: 'spark-intro', title: 'PySpark Fundamentals', icon: '📄' },
      { id: 'spark-streaming', title: 'Spark Structured Streaming', icon: '📄' },
      { id: 'spark-performance', title: 'Spark Performance Tuning', icon: '📄' },
      { id: 'delta-lake', title: 'Delta Lake & Lakehouse', icon: '📄' },
    ]
  },
  {
    title: 'Apache Kafka & Streaming',
    icon: '📡',
    children: [
      { id: 'kafka-fraud-detection', title: 'Real-time Fraud Detection Pipeline', icon: '📄' },
      { id: 'kafka-architecture', title: 'Kafka Architecture Deep Dive', icon: '📄' },
      { id: 'kafka-python', title: 'Producers & Consumers (Python)', icon: '📄' },
      { id: 'kafka-connect', title: 'Kafka Connect & Schema Registry', icon: '📄' },
      { id: 'kafka-event-pipeline', title: 'Real-time Event Pipeline', icon: '📄' },
    ]
  },
  {
    title: 'Apache Airflow & Orchestration',
    icon: '🔄',
    children: [
      { id: 'airflow-data-quality', title: 'Data Quality Checks DAG', icon: '📄' },
      { id: 'airflow-dag-patterns', title: 'Airflow DAG Patterns', icon: '📄' },
      { id: 'airflow-dynamic-dags', title: 'Dynamic DAG Generation', icon: '📄' },
      { id: 'airflow-docker-k8s', title: 'Airflow with Docker & K8s', icon: '📄' },
      { id: 'airflow-monitoring', title: 'Monitoring & Alerting', icon: '📄' },
    ]
  },
  {
    title: 'dbt & Data Transformation',
    icon: '🔨',
    children: [
      { id: 'dbt-advanced-macros', title: 'Advanced Macros & Jinja', icon: '📄' },
      { id: 'dbt-core-vs-cloud', title: 'dbt Core vs dbt Cloud', icon: '📄' },
      { id: 'dbt-project', title: 'Building a dbt Project', icon: '📄' },
      { id: 'dbt-incremental', title: 'Incremental Models & Snapshots', icon: '📄' },
      { id: 'dbt-cicd', title: 'CI/CD with dbt', icon: '📄' },
    ]
  },
  {
    title: 'MLOps & ML Engineering',
    icon: '🤖',
    children: [
      { id: 'mlops-level-1-architecture', title: 'MLOps Level 1 Architecture', icon: '📄' },
      { id: 'mlops-lifecycle', title: 'MLOps Lifecycle & Maturity', icon: '📄' },
      { id: 'feature-stores', title: 'Feature Stores (Feast)', icon: '📄' },
      { id: 'model-training', title: 'Model Training (MLflow)', icon: '📄' },
      { id: 'model-serving', title: 'Model Serving (FastAPI + Docker)', icon: '📄' },
      { id: 'model-monitoring', title: 'Model Monitoring & Drift', icon: '📄' },
      { id: 'ab-testing-ml', title: 'A/B Testing for ML Models', icon: '📄' },
    ]
  },
  {
    title: 'Docker & Kubernetes',
    icon: '🐳',
    children: [
      { id: 'docker-mlops-stack', title: 'Complete MLOps Stack', icon: '📄' },
      { id: 'docker-for-de', title: 'Docker for Data Engineers', icon: '📄' },
      { id: 'k8s-fundamentals', title: 'Kubernetes Fundamentals', icon: '📄' },
      { id: 'ml-on-k8s', title: 'ML Models on Kubernetes', icon: '📄' },
      { id: 'helm-charts', title: 'Helm Charts for Pipelines', icon: '📄' },
    ]
  },
  {
    title: 'Cloud Data Platforms',
    icon: '☁️',
    children: [
      { id: 'aws-data-stack', title: 'AWS Data Stack', icon: '📄' },
      { id: 'gcp-data-stack', title: 'GCP Data Stack', icon: '📄' },
      { id: 'azure-data-stack', title: 'Azure Data Stack', icon: '📄' },
      { id: 'multi-cloud', title: 'Multi-Cloud Architecture', icon: '📄' },
    ]
  },
  {
    title: 'Python for Data & ML',
    icon: '🐍',
    children: [
      { id: 'python-asyncio', title: 'High-Performance Asyncio', icon: '📄' },
      { id: 'python-best-practices', title: 'Python Best Practices', icon: '📄' },
      { id: 'pandas-polars', title: 'Pandas & Polars Performance', icon: '📄' },
      { id: 'fastapi-data', title: 'Data APIs with FastAPI', icon: '📄' },
      { id: 'testing-pipelines', title: 'Testing Pipelines (pytest)', icon: '📄' },
    ]
  },
  {
    title: 'CI/CD & Infrastructure',
    icon: '🚀',
    children: [
      { id: 'github-actions-pipelines', title: 'GitHub Actions for Pipelines', icon: '📄' },
      { id: 'terraform-data', title: 'Terraform for Data Infra', icon: '📄' },
      { id: 'dataops', title: 'DataOps Practices', icon: '📄' },
      { id: 'monitoring-prometheus-grafana', title: 'Prometheus & Grafana', icon: '📄' },
    ]
  },
  {
    title: 'Data Warehouse (Snowflake)',
    icon: '❄️',
    children: [
      { id: 'snowflake-architecture', title: 'Snowflake Architecture & Snowpipe', icon: '📄' },
    ]
  },
  {
    title: 'SQL GenAI & LLMOps',
    icon: '🧠',
    children: [
      { id: 'sql-genai-rag', title: 'Text-to-SQL GenAI & RAG', icon: '📄' },
    ]
  },
];
