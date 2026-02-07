"use client";

import { useState } from "react";
import { useSiteData, type Project } from "@/context/SiteDataContext";

function ProjectEditor({ project, onChange, onDelete }: { project: Project; onChange: (p: Project) => void; onDelete: () => void }) {
  const [open, setOpen] = useState(false);

  const updateTech = (index: number, field: "name" | "purpose", value: string) => {
    const techs = [...project.technologies];
    techs[index] = { ...techs[index], [field]: value };
    onChange({ ...project, technologies: techs });
  };

  const addTech = () => onChange({ ...project, technologies: [...project.technologies, { name: "", purpose: "" }] });
  const removeTech = (i: number) => onChange({ ...project, technologies: project.technologies.filter((_, idx) => idx !== i) });

  const updateMember = (index: number, field: "name" | "role", value: string) => {
    const members = [...project.team];
    members[index] = { ...members[index], [field]: value };
    onChange({ ...project, team: members });
  };

  const addMember = () => onChange({ ...project, team: [...project.team, { name: "", role: "" }] });
  const removeMember = (i: number) => onChange({ ...project, team: project.team.filter((_, idx) => idx !== i) });

  return (
    <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] overflow-hidden">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center gap-4 p-4 text-left hover:bg-white/[0.02]">
        <span className="rounded-lg border border-white/10 bg-white/[0.04] px-2 py-1 text-[10px] text-white/40">{project.category}</span>
        <div className="flex-1">
          <p className="text-sm font-semibold text-white">{project.name}</p>
          <p className="text-xs text-white/30">{project.shortDescription}</p>
        </div>
        <span className="text-xs text-white/20">{project.stats}</span>
        <svg className={`h-5 w-5 text-white/30 transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="border-t border-white/[0.06] p-4 space-y-4">
          {/* Basic Info */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-xs text-white/40">Proje Adı</label>
              <input value={project.name} onChange={(e) => onChange({ ...project, name: e.target.value })} className="w-full rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-sm text-white outline-none focus:border-pink-500/40" />
            </div>
            <div>
              <label className="mb-1 block text-xs text-white/40">Slug (URL)</label>
              <input value={project.slug} onChange={(e) => onChange({ ...project, slug: e.target.value })} className="w-full rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-sm text-white outline-none focus:border-pink-500/40" />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <label className="mb-1 block text-xs text-white/40">Kategori</label>
              <input value={project.category} onChange={(e) => onChange({ ...project, category: e.target.value })} className="w-full rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-sm text-white outline-none focus:border-pink-500/40" />
            </div>
            <div>
              <label className="mb-1 block text-xs text-white/40">Kategori Slug</label>
              <input value={project.categorySlug} onChange={(e) => onChange({ ...project, categorySlug: e.target.value })} className="w-full rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-sm text-white outline-none focus:border-pink-500/40" />
            </div>
            <div>
              <label className="mb-1 block text-xs text-white/40">Tarih</label>
              <input value={project.date} onChange={(e) => onChange({ ...project, date: e.target.value })} className="w-full rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-sm text-white outline-none focus:border-pink-500/40" />
            </div>
          </div>
          <div>
            <label className="mb-1 block text-xs text-white/40">Kısa Açıklama</label>
            <input value={project.shortDescription} onChange={(e) => onChange({ ...project, shortDescription: e.target.value })} className="w-full rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-sm text-white outline-none focus:border-pink-500/40" />
          </div>
          <div>
            <label className="mb-1 block text-xs text-white/40">Detaylı Açıklama</label>
            <textarea value={project.longDescription} onChange={(e) => onChange({ ...project, longDescription: e.target.value })} rows={3} className="w-full rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-sm text-white outline-none focus:border-pink-500/40 resize-none" />
          </div>
          <div>
            <label className="mb-1 block text-xs text-white/40">Amaç</label>
            <textarea value={project.aim} onChange={(e) => onChange({ ...project, aim: e.target.value })} rows={2} className="w-full rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-sm text-white outline-none focus:border-pink-500/40 resize-none" />
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <label className="mb-1 block text-xs text-white/40">Teknoloji Stack</label>
              <input value={project.stack} onChange={(e) => onChange({ ...project, stack: e.target.value })} className="w-full rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-sm text-white outline-none focus:border-pink-500/40" />
            </div>
            <div>
              <label className="mb-1 block text-xs text-white/40">İstatistik</label>
              <input value={project.stats} onChange={(e) => onChange({ ...project, stats: e.target.value })} className="w-full rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-sm text-white outline-none focus:border-pink-500/40" />
            </div>
            <div>
              <label className="mb-1 block text-xs text-white/40">Görsel URL</label>
              <input value={project.image} onChange={(e) => onChange({ ...project, image: e.target.value })} className="w-full rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-sm text-white outline-none focus:border-pink-500/40" />
            </div>
          </div>

          {/* Technologies */}
          <div className="rounded-lg border border-white/[0.06] p-4">
            <div className="mb-3 flex items-center justify-between">
              <label className="text-xs font-medium text-white/50">Teknolojiler</label>
              <button onClick={addTech} className="text-xs text-pink-400 hover:text-pink-300">+ Ekle</button>
            </div>
            {project.technologies.map((tech, i) => (
              <div key={i} className="mb-2 flex items-center gap-2">
                <input value={tech.name} onChange={(e) => updateTech(i, "name", e.target.value)} placeholder="İsim" className="w-1/3 rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs text-white outline-none focus:border-pink-500/40" />
                <input value={tech.purpose} onChange={(e) => updateTech(i, "purpose", e.target.value)} placeholder="Amaç" className="flex-1 rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs text-white outline-none focus:border-pink-500/40" />
                <button onClick={() => removeTech(i)} className="text-red-400/40 hover:text-red-400"><svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></button>
              </div>
            ))}
          </div>

          {/* Team */}
          <div className="rounded-lg border border-white/[0.06] p-4">
            <div className="mb-3 flex items-center justify-between">
              <label className="text-xs font-medium text-white/50">Ekip Üyeleri</label>
              <button onClick={addMember} className="text-xs text-pink-400 hover:text-pink-300">+ Ekle</button>
            </div>
            {project.team.map((member, i) => (
              <div key={i} className="mb-2 flex items-center gap-2">
                <input value={member.name} onChange={(e) => updateMember(i, "name", e.target.value)} placeholder="İsim" className="w-1/3 rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs text-white outline-none focus:border-pink-500/40" />
                <input value={member.role} onChange={(e) => updateMember(i, "role", e.target.value)} placeholder="Rol" className="flex-1 rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs text-white outline-none focus:border-pink-500/40" />
                <button onClick={() => removeMember(i)} className="text-red-400/40 hover:text-red-400"><svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></button>
              </div>
            ))}
          </div>

          <div className="flex justify-end">
            <button onClick={onDelete} className="rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-2 text-xs text-red-400 hover:bg-red-500/20">
              Projeyi Sil
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function AdminProjelerPage() {
  const { data, updateProjects } = useSiteData();
  const [projects, setProjects] = useState<Project[]>([...data.projects]);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    updateProjects(projects);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const addProject = () => {
    setProjects([...projects, {
      slug: `proje-${Date.now()}`,
      category: "Web",
      categorySlug: "web",
      name: "Yeni Proje",
      shortDescription: "Proje açıklaması",
      longDescription: "Detaylı açıklama",
      aim: "Proje amacı",
      stack: "Tech Stack",
      technologies: [],
      team: [],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
      stats: "0",
      date: "Yeni",
    }]);
  };

  const updateProject = (index: number, project: Project) => {
    const updated = [...projects];
    updated[index] = project;
    setProjects(updated);
  };

  const deleteProject = (index: number) => {
    setProjects(projects.filter((_, i) => i !== index));
  };

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Projeler</h1>
          <p className="mt-1 text-sm text-white/40">Tüm projeleri yönetin ({projects.length} adet)</p>
        </div>
        <div className="flex gap-3">
          <button onClick={addProject} className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-white/60 hover:bg-white/[0.08]">
            + Yeni Proje
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
        {projects.map((project, i) => (
          <ProjectEditor key={project.slug + i} project={project} onChange={(p) => updateProject(i, p)} onDelete={() => deleteProject(i)} />
        ))}
      </div>
    </div>
  );
}
