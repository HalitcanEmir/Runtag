"use client";

import { useState } from "react";
import { useSiteData, type CrewColumn, type CrewTask } from "@/context/SiteDataContext";

const columnColors = [
  { value: "red", gradient: "from-red-500 to-orange-500", bgGlow: "bg-red-500/20" },
  { value: "yellow", gradient: "from-yellow-500 to-amber-500", bgGlow: "bg-yellow-500/20" },
  { value: "blue", gradient: "from-blue-500 to-cyan-500", bgGlow: "bg-blue-500/20" },
  { value: "green", gradient: "from-emerald-500 to-green-500", bgGlow: "bg-emerald-500/20" },
  { value: "purple", gradient: "from-purple-500 to-violet-500", bgGlow: "bg-purple-500/20" },
  { value: "pink", gradient: "from-pink-500 to-rose-500", bgGlow: "bg-pink-500/20" },
];

function TaskEditor({ task, onChange, onDelete }: { task: CrewTask; onChange: (t: CrewTask) => void; onDelete: () => void }) {
  return (
    <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-3 space-y-2">
      <div className="flex items-center gap-2">
        <input value={task.title} onChange={(e) => onChange({ ...task, title: e.target.value })} placeholder="Görev başlığı" className="flex-1 rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs text-white outline-none focus:border-pink-500/40" />
        <button onClick={onDelete} className="text-red-400/40 hover:text-red-400">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>
      <textarea value={task.description} onChange={(e) => onChange({ ...task, description: e.target.value })} rows={2} placeholder="Görev açıklaması" className="w-full rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs text-white outline-none focus:border-pink-500/40 resize-none" />
      <div className="flex gap-2">
        <input value={task.image || ""} onChange={(e) => onChange({ ...task, image: e.target.value || undefined })} placeholder="Görsel URL (opsiyonel)" className="flex-1 rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs text-white outline-none focus:border-pink-500/40" />
        <input type="number" value={task.members} onChange={(e) => onChange({ ...task, members: parseInt(e.target.value) || 0 })} className="w-16 rounded-lg border border-white/[0.08] bg-white/[0.03] px-2 py-1.5 text-xs text-white outline-none focus:border-pink-500/40 text-center" />
        <select value={task.priority} onChange={(e) => onChange({ ...task, priority: e.target.value as "high" | "medium" | "low" })} className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-2 py-1.5 text-xs text-white outline-none focus:border-pink-500/40">
          <option value="high" className="bg-[#0a0812]">Yüksek</option>
          <option value="medium" className="bg-[#0a0812]">Orta</option>
          <option value="low" className="bg-[#0a0812]">Düşük</option>
        </select>
      </div>
    </div>
  );
}

function ColumnEditor({ column, onChange, onDelete }: { column: CrewColumn; onChange: (c: CrewColumn) => void; onDelete: () => void }) {
  const [open, setOpen] = useState(false);

  const updateTask = (index: number, task: CrewTask) => {
    const tasks = [...column.tasks];
    tasks[index] = task;
    onChange({ ...column, tasks });
  };

  const removeTask = (index: number) => {
    onChange({ ...column, tasks: column.tasks.filter((_, i) => i !== index) });
  };

  const addTask = () => {
    onChange({ ...column, tasks: [...column.tasks, { title: "Yeni Görev", description: "Görev açıklaması", members: 1, priority: "medium" }] });
  };

  const setColor = (c: typeof columnColors[number]) => {
    onChange({ ...column, color: c.value, gradient: c.gradient, bgGlow: c.bgGlow });
  };

  return (
    <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] overflow-hidden">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center gap-4 p-4 text-left hover:bg-white/[0.02]">
        <div className={`h-3 w-3 rounded-full bg-${column.color}-500`} />
        <div className="flex-1">
          <p className="text-sm font-semibold text-white">{column.title}</p>
          <p className="text-xs text-white/30">{column.tasks.length} görev</p>
        </div>
        <svg className={`h-5 w-5 text-white/30 transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="border-t border-white/[0.06] p-4 space-y-4">
          <div>
            <label className="mb-1 block text-xs text-white/40">Kolon Başlığı</label>
            <input value={column.title} onChange={(e) => onChange({ ...column, title: e.target.value })} className="w-full rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-sm text-white outline-none focus:border-pink-500/40" />
          </div>
          <div>
            <label className="mb-1 block text-xs text-white/40">Renk</label>
            <div className="flex flex-wrap gap-2">
              {columnColors.map((c) => (
                <button key={c.value} onClick={() => setColor(c)} className={`rounded-lg px-3 py-1.5 text-xs capitalize transition-all ${column.color === c.value ? "bg-white/10 text-white border border-white/20" : "text-white/40 border border-white/[0.06] hover:bg-white/[0.04]"}`}>
                  {c.value}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-3 flex items-center justify-between">
              <label className="text-xs font-medium text-white/50">Görevler</label>
              <button onClick={addTask} className="text-xs text-pink-400 hover:text-pink-300">+ Görev Ekle</button>
            </div>
            <div className="space-y-2">
              {column.tasks.map((task, i) => (
                <TaskEditor key={i} task={task} onChange={(t) => updateTask(i, t)} onDelete={() => removeTask(i)} />
              ))}
            </div>
          </div>

          <div className="flex justify-end">
            <button onClick={onDelete} className="rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-2 text-xs text-red-400 hover:bg-red-500/20">
              Kolonu Sil
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function AdminEkipPage() {
  const { data, updateCrews } = useSiteData();
  const [crews, setCrews] = useState<CrewColumn[]>([...data.crews]);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    updateCrews(crews);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const addColumn = () => {
    const c = columnColors[0];
    setCrews([...crews, { title: "Yeni Kolon", color: c.value, gradient: c.gradient, bgGlow: c.bgGlow, tasks: [] }]);
  };

  const updateColumn = (index: number, col: CrewColumn) => {
    const updated = [...crews];
    updated[index] = col;
    setCrews(updated);
  };

  const deleteColumn = (index: number) => {
    setCrews(crews.filter((_, i) => i !== index));
  };

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Ekip Süreci</h1>
          <p className="mt-1 text-sm text-white/40">Kanban board kolonları ve görevlerini düzenleyin ({crews.length} kolon)</p>
        </div>
        <div className="flex gap-3">
          <button onClick={addColumn} className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-white/60 hover:bg-white/[0.08]">
            + Yeni Kolon
          </button>
          <button
            onClick={handleSave}
            className={`rounded-xl px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${
              saved ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" : "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-[0_4px_20px_rgba(236,72,153,0.3)]"
            }`}
          >
            {saved ? "✓ Kaydedildi" : "Kaydet"}
          </button>
        </div>
      </div>

      <div className="space-y-3">
        {crews.map((col, i) => (
          <ColumnEditor key={i} column={col} onChange={(c) => updateColumn(i, c)} onDelete={() => deleteColumn(i)} />
        ))}
      </div>
    </div>
  );
}
