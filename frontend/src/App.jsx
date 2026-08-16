import { useState } from "react";
import axios from "axios";
import {
  ShieldCheck,
  ShieldAlert,
  Newspaper,
  Sparkles,
  Search,
  RotateCcw,
  Brain,
  Zap,
  CheckCircle2,
  AlertTriangle,
  Activity,
} from "lucide-react";

function App() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyzeNews = async () => {
    if (!title.trim() || !text.trim()) {
      alert("Please enter both a headline and article text.");
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/predict",
        {
          title: title.trim(),
          text: text.trim(),
        }
      );

      console.log("Backend response:", response.data);

      setResult(response.data.prediction);
    } catch (error) {
      console.error("Prediction error:", error);

      alert(
        "Unable to connect to the AI server. Make sure FastAPI is running."
      );
    } finally {
      setLoading(false);
    }
  };

  const clearAll = () => {
    setTitle("");
    setText("");
    setResult(null);
  };

  const isFake = result === "FAKE";
  const isReal = result === "REAL";

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">

      {/* Background decoration */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-200px] left-[-150px] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl" />
        <div className="absolute top-[30%] right-[-200px] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-[-200px] left-[30%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 border-b border-white/10 bg-slate-950/60 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">

          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center shadow-lg shadow-purple-500/20">
              <ShieldCheck size={25} />
            </div>

            <div>
              <h1 className="font-bold text-lg">
                TruthLens AI
              </h1>

              <p className="text-xs text-slate-400">
                Fake News Detection
              </p>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-sm text-slate-300">
            <Activity size={16} className="text-emerald-400" />
            AI System Online
          </div>

        </div>
      </nav>

      {/* Main */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 py-16">

        {/* Hero */}
        <section className="text-center mb-14">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-400/20 bg-purple-500/10 text-purple-300 text-sm mb-6">
            <Sparkles size={16} />
            Powered by Machine Learning
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
            Detect Fake News
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              with AI
            </span>
          </h2>

          <p className="max-w-2xl mx-auto mt-6 text-slate-400 text-base sm:text-lg leading-relaxed">
            Analyze news articles using TF-IDF text representation and a
            trained Support Vector Machine model.
          </p>

        </section>

        {/* Main card */}
        <section className="max-w-4xl mx-auto">

          <div className="rounded-3xl border border-white/10 bg-white/[0.05] backdrop-blur-xl shadow-2xl shadow-black/30 p-6 sm:p-8">

            {/* Headline */}
            <div className="mb-7">

              <label className="flex items-center gap-2 text-sm font-semibold text-slate-200 mb-3">
                <Newspaper size={18} className="text-purple-400" />
                News Headline
              </label>

              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter the news headline..."
                className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-5 py-4 text-white placeholder-slate-500 outline-none transition focus:border-purple-500/60 focus:ring-4 focus:ring-purple-500/10"
              />

            </div>

            {/* Article */}
            <div className="mb-7">

              <div className="flex items-center justify-between mb-3">

                <label className="flex items-center gap-2 text-sm font-semibold text-slate-200">
                  <Brain size={18} className="text-blue-400" />
                  Article Content
                </label>

                <span className="text-xs text-slate-500">
                  {text.length} characters
                </span>

              </div>

              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Paste the news article here..."
                rows={10}
                className="w-full resize-none rounded-2xl border border-white/10 bg-slate-900/70 px-5 py-4 text-white placeholder-slate-500 outline-none transition focus:border-blue-500/60 focus:ring-4 focus:ring-blue-500/10"
              />

            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">

              <button
                onClick={analyzeNews}
                disabled={loading}
                className="flex-1 flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-4 font-bold shadow-lg shadow-purple-600/20 transition hover:scale-[1.01] hover:shadow-purple-600/30 disabled:cursor-not-allowed disabled:opacity-60"
              >

                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Search size={20} />
                    Analyze News
                  </>
                )}

              </button>

              <button
                onClick={clearAll}
                className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 font-semibold text-slate-300 transition hover:bg-white/10"
              >
                <RotateCcw size={18} />
                Clear
              </button>

            </div>

          </div>

        </section>

        {/* Result */}
        {result && (
          <section className="max-w-4xl mx-auto mt-8 animate-[fadeIn_0.5s_ease-out]">

            <div
              className={`rounded-3xl border p-8 backdrop-blur-xl ${
                isFake
                  ? "border-red-500/30 bg-red-500/10"
                  : "border-emerald-500/30 bg-emerald-500/10"
              }`}
            >

              <div className="flex flex-col sm:flex-row items-center gap-6">

                <div
                  className={`w-20 h-20 rounded-2xl flex items-center justify-center ${
                    isFake
                      ? "bg-red-500/15 text-red-400"
                      : "bg-emerald-500/15 text-emerald-400"
                  }`}
                >
                  {isFake ? (
                    <ShieldAlert size={42} />
                  ) : (
                    <ShieldCheck size={42} />
                  )}
                </div>

                <div className="text-center sm:text-left">

                  <p className="text-sm uppercase tracking-widest text-slate-400 mb-2">
                    AI Classification
                  </p>

                  <h3
                    className={`text-3xl font-black ${
                      isFake
                        ? "text-red-400"
                        : "text-emerald-400"
                    }`}
                  >
                    {isFake
                      ? "LIKELY FAKE NEWS"
                      : "LIKELY REAL NEWS"}
                  </h3>

                  <p className="text-slate-400 mt-2">
                    The trained SVM model classified this article as{" "}
                    <span className="font-bold text-white">
                      {result}
                    </span>.
                  </p>

                </div>

              </div>

              {/* Status */}
              <div className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-3">

                <div className="rounded-2xl bg-black/20 border border-white/5 p-4">
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <Brain size={16} />
                    Model
                  </div>
                  <p className="mt-1 font-semibold">
                    SVM
                  </p>
                </div>

                <div className="rounded-2xl bg-black/20 border border-white/5 p-4">
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <Zap size={16} />
                    Features
                  </div>
                  <p className="mt-1 font-semibold">
                    TF-IDF
                  </p>
                </div>

                <div className="rounded-2xl bg-black/20 border border-white/5 p-4">
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <CheckCircle2 size={16} />
                    Status
                  </div>
                  <p className="mt-1 font-semibold text-emerald-400">
                    Analyzed
                  </p>
                </div>

              </div>

            </div>

          </section>
        )}

        {/* Features */}
        <section className="max-w-4xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-3 gap-5">

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.06] transition">
            <Brain className="text-purple-400 mb-4" size={25} />
            <h3 className="font-bold mb-2">
              Machine Learning
            </h3>
            <p className="text-sm text-slate-400">
              Uses a trained Support Vector Machine classifier.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.06] transition">
            <Zap className="text-blue-400 mb-4" size={25} />
            <h3 className="font-bold mb-2">
              TF-IDF Analysis
            </h3>
            <p className="text-sm text-slate-400">
              Converts article text into numerical features.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.06] transition">
            <CheckCircle2 className="text-emerald-400 mb-4" size={25} />
            <h3 className="font-bold mb-2">
              Fast Prediction
            </h3>
            <p className="text-sm text-slate-400">
              Get a classification from your trained model instantly.
            </p>
          </div>

        </section>

      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 mt-16">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center text-sm text-slate-500">
          AI Fake News Detector • TF-IDF + SVM • FastAPI + React
        </div>
      </footer>

    </div>
  );
}

export default App;