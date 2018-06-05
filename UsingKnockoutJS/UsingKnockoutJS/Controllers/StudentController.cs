using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;
using UsingKnockoutJS.Data;
using UsingKnockoutJS.Models;

namespace UsingKnockoutJS.Controllers
{
    public class StudentController : Controller
    {
        private readonly StudentDbContext db = new StudentDbContext();
        // GET: Student
        public ActionResult Index()
        {
            return View();

        }
        //GET All  Student
        public JsonResult ListStudents()
        {
            return Json(db.student.ToList(), JsonRequestBehavior.AllowGet);
        }

        // GET: Student
        public ActionResult Create()
        {
            return View();
        }
        // POST: Student
        [HttpPost]
        public string Create(Student stu)
        {
            if (!ModelState.IsValid) { return "Model is Invalid All fields required"; }
            db.student.Add(stu);
            db.SaveChanges();
            return null;
        }

        // GET: Student/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            var student = db.student.Find(id);
            if (student == null)
                return HttpNotFound();
            var serializer = new JavaScriptSerializer();
            ViewBag.SelectedStudent = serializer.Serialize(student);
            return View();
        }
        // POST:Student/Update/5
        [HttpPost]
        public string Update(Student student)
        {
            if (!ModelState.IsValid) return "Invalid model";
            db.Entry(student).State = EntityState.Modified;
            db.SaveChanges();
            return "Updated successfully";
        }


        // GET: Home/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            var student = db.student.Find(id);
            if (student == null)
                return HttpNotFound();
            var serializer = new JavaScriptSerializer();
            ViewBag.SelectedStudent = serializer.Serialize(student);
            return View();
        }
        // POST: Home/Delete/5
        [HttpPost, ActionName("Delete")]
        public string Delete(Student student)
        {
            if (student == null) return "Invalid data";
            var getStudent = db.student.Find(student.Id);
            db.student.Remove(getStudent);
            db.SaveChanges();
            return "Deleted successfully";
        }
    }
}