using System.Runtime.ConstrainedExecution;
using CoreMVCWebApplication.Data;
using CoreMVCWebApplication.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CoreMVCWebApplication.Controllers
{
    public class EmpController : Controller
    {
        private readonly MyDbContext myDb;

        public EmpController(MyDbContext myDb)
        {
            this.myDb = myDb;
        }

        [HttpGet]
        public async Task<IActionResult> EmpList()
        {
            var emps = await myDb.MyProperty.ToListAsync();

            //var empList = new List<Emp>
            //{
            //    new Emp
            //    {
            //        Name = "M Nouman Arif",
            //        Department = "DotNet",
            //        Email = "Nomirana020@example.com",
            //        Phone = "123-456-7890"
            //    },
            //};

            return View(emps);
        }
        public IActionResult AddNewEmp() {
        
            return View();
        }
        [HttpPost]
        public async  Task<IActionResult> Create(AddEmpViewModel addEmpReq )
        {
            var Emp = new Emp()
            {
              //  Id = (int)(DateTime.UtcNow.Subtract(new DateTime(1970, 1, 1))).TotalSeconds,
                Name = addEmpReq.Name,
                Salary= addEmpReq.Salary,
                Department = addEmpReq.Department,
                Email = addEmpReq.Email,
                Phone = addEmpReq.Phone


            };

            await myDb.MyProperty.AddAsync(Emp);
            await myDb.SaveChangesAsync();
            return RedirectToAction("EmpList");

        }

        [HttpGet]
        public async Task<IActionResult> Update(int id)
        {
            var employee = await myDb.MyProperty.FirstOrDefaultAsync(p => p.Id == id);

            if (employee != null)
            { 
            var empl = new Emp()
            {
                Id = employee.Id,
                Name = employee.Name,
                Salary = employee.Salary,
                Department = employee.Department,
                Email = employee.Email,
                Phone = employee.Phone
            };
                return View(empl);
            }

            return RedirectToAction("EmpList");
        }
        [HttpPost]
        public async  Task<IActionResult> Update(Emp model)
        {
            var UpEmp = await myDb.MyProperty.FindAsync(model.Id);

            if (UpEmp != null)
            {
                UpEmp.Name = model.Name;
                UpEmp.Department = model.Department;
                UpEmp.Salary = model.Salary;
                UpEmp.Phone = model.Phone;
                UpEmp.Email = model.Email;

                await myDb.SaveChangesAsync();
                return RedirectToAction("EmpList");
            }
            return RedirectToAction("EmpList");
        }
        
        public async Task<IActionResult> Delete(Emp model)
        {
            var delemp = await myDb.MyProperty.FindAsync(model.Id);
            if (delemp != null)
            {
                myDb.MyProperty.Remove(delemp);
                await myDb.SaveChangesAsync();
                return RedirectToAction("EmpList");
            }

            return RedirectToAction("EmpList");
        }

    }
}
