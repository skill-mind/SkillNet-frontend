import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function CourseCreationModal() {
  const [skills, setSkills] = useState<string[]>([]);
  const [newSkill, setNewSkill] = useState("");

  const addSkill = () => {
    if (newSkill.trim()) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-zinc-800 text-white hover:bg-zinc-700">
          Create Course
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-zinc-900 border-zinc-800">
        <div className="grid gap-6 py-4">
          {/* Course Title */}
          <div className="space-y-2">
            <label className="text-sm text-zinc-400">Course title*</label>
            <input
              type="text"
              placeholder="Design made simple"
              className="w-full bg-black border border-zinc-800 rounded-md p-3 text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-zinc-700"
            />
          </div>

          {/* Course Description */}
          <div className="space-y-2">
            <label className="text-sm text-zinc-400">Course description</label>
            <textarea
              placeholder="Write your cover letter"
              rows={4}
              className="w-full bg-black border border-zinc-800 rounded-md p-3 text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-zinc-700"
            />
          </div>

          {/* Access Level */}
          <div className="space-y-2">
            <label className="text-sm text-zinc-400">Access*</label>
            <select className="w-full bg-black border border-zinc-800 rounded-md p-3 text-white focus:outline-none focus:ring-1 focus:ring-zinc-700">
              <option value="paid">Paid Course</option>
              <option value="free">Free Course</option>
            </select>
          </div>

          {/* Skills Section */}
          <div className="space-y-2">
            <label className="text-sm text-zinc-400">
              Skills you will gain
            </label>
            <div className="flex space-x-2">
              <input
                type="text"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                placeholder="Add a skill"
                className="flex-1 bg-black border border-zinc-800 rounded-md p-3 text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-zinc-700"
              />
              <Button
                type="button"
                onClick={addSkill}
                variant="outline"
                className="border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800"
              >
                Add
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Certification */}
          <div className="space-y-2">
            <label className="text-sm text-zinc-400">Certification*</label>
            <select className="w-full bg-black border border-zinc-800 rounded-md p-3 text-white focus:outline-none focus:ring-1 focus:ring-zinc-700">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          {/* Add File Button */}
          <Button
            type="button"
            className="w-full bg-black border border-zinc-800 text-white hover:bg-zinc-800 flex items-center justify-center space-x-2"
          >
            <span>Add File</span>
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
