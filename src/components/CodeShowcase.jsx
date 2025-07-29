import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Play, Coffee, Code2, Zap } from "lucide-react";

const CodeShowcase = () => {
  const [activeSnippet, setActiveSnippet] = useState(0);
  const [showOutput, setShowOutput] = useState({});
  const [copied, setCopied] = useState(false);
  const [typingText, setTypingText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const workflowSnippets = [
    {
      id: "morning",
      title: "Mein perfekter Start",
      icon: <Coffee className="w-4 h-4" />,
      code: `function myMorningRitual() {
  const coffee = new Espresso({ shots: 2 });
  const motivation = Math.random() * 100;
  
  if (coffee.isEmpty()) {
    throw new Error('Cannot compile without caffeine ☕');
  }
  
  while (motivation < 80) {
    coffee.refill();
    motivation += 25;
  }
  
  return 'Ready to build something amazing! 🚀';
}

// Output: Ready to build something amazing! 🚀`,
      output: "Ready to build something amazing! 🚀",
    },
    {
      id: "debugging",
      title: "Meine Debugging-Strategie",
      icon: <Code2 className="w-4 h-4" />,
      code: `const debugProcess = async (bug) => {
  const strategies = [
    'console.log("wtf is happening")',
    'google.search(error + "stackoverflow")',
    'delete_everything_and_start_over()',
    'blame_the_browser()',
    'coffee_break_and_pray()'
  ];
  
  for (let strategy of strategies) {
    try {
      await strategy.execute();
      if (bug.isFixed()) {
        return "I'm a genius! 🎉";
      }
    } catch (error) {
      console.log("This shouldn't happen... 🤔");
    }
  }
  
  return "It works on my machine 🤷‍♀️";
}`,
      output: "It works on my machine 🤷‍♀️",
    },
  ];

  const [currentSnippets, setCurrentSnippets] = useState(workflowSnippets);

  useEffect(() => {
    if (isTyping) {
      const text = currentSnippets[activeSnippet].code;
      let index = 0;
      setTypingText("");

      const typeInterval = setInterval(() => {
        if (index < text.length) {
          setTypingText((prev) => prev + text[index]);
          index++;
        } else {
          setIsTyping(false);
          clearInterval(typeInterval);
        }
      }, 20);

      return () => clearInterval(typeInterval);
    }
  }, [isTyping, activeSnippet, currentSnippets]);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const runCode = (snippetId) => {
    setShowOutput((prev) => ({ ...prev, [snippetId]: !prev[snippetId] }));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl mb-3 text-white">
          Mein Leben in Code
        </h3>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        {currentSnippets.map((snippet, index) => (
          <motion.div
            key={snippet.id}
            className={`cursor-pointer transition-all duration-300 ${
              index === activeSnippet ? "scale-105" : "hover:scale-102"
            }`}
            onClick={() => setActiveSnippet(index)}
            whileHover={{ y: -5 }}
          >
            <div
              className={`p-4 rounded-xl border transition-all duration-300 h-24 flex flex-col ${
                index === activeSnippet
                  ? "bg-white/20 border-white/50 shadow-lg shadow-black/30"
                  : "bg-white/5 border-white/10 hover:border-white/30"
              }`}
            >
              <div className="flex items-center gap-2 mb-3">
                {snippet.icon}
                <h4 className="text-white text-sm">
                  {snippet.title}
                </h4>
              </div>
              <div className="text-xs text-gray-400 flex-1 overflow-hidden">
                <code className="block">{snippet.code.slice(0, 80)}...</code>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={`workflow-${activeSnippet}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="bg-black/60 backdrop-blur-xl border border-white/30 rounded-xl overflow-hidden shadow-xl"
        >
          <div className="flex items-center justify-between p-3 border-b border-white/10 bg-white/5">
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              </div>
              <span className="text-xs text-white">
                {currentSnippets[activeSnippet].title}
              </span>
            </div>
            <div className="flex gap-1">
              <button
                onClick={() => setIsTyping(true)}
                className="p-1 hover:bg-white/10 rounded transition-colors duration-200 text-gray-300 hover:text-white"
                title="Typing Animation"
              >
                <Play className="w-3 h-3" />
              </button>
              <button
                onClick={() => runCode(currentSnippets[activeSnippet].id)}
                className="p-1 hover:bg-white/10 rounded transition-colors duration-200 text-gray-300 hover:text-white"
                title="Run Code"
              >
                <Zap className="w-3 h-3" />
              </button>
              <button
                onClick={() => handleCopy(currentSnippets[activeSnippet].code)}
                className="p-1 hover:bg-white/10 rounded transition-colors duration-200 text-gray-300 hover:text-white"
                title="Copy Code"
              >
                <Copy className="w-3 h-3" />
              </button>
            </div>
          </div>

          <div className="p-4">
            <pre
              className="text-xs text-white leading-relaxed overflow-x-auto max-h-48 overflow-y-auto"
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: "white transparent",
              }}
            >
              <code>
                {isTyping ? typingText : currentSnippets[activeSnippet].code}
                {isTyping && <span className="animate-pulse">|</span>}
              </code>
            </pre>

            <AnimatePresence>
              {showOutput[currentSnippets[activeSnippet].id] && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 pt-4 border-t border-white/10"
                >
                  <div className="bg-white/10 border border-white/20 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      <span className="text-xs text-white">
                        Output
                      </span>
                    </div>
                    <p className="text-gray-300 text-xs">
                      {currentSnippets[activeSnippet].output}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {copied && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="mt-3 text-center"
                >
                  <span className="px-3 py-1 bg-white/20 text-white rounded-full text-xs">
                    Code kopiert! 🎉
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default CodeShowcase;
