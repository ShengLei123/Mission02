using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission02.Models
{
    public class GradeCalculatorModel
    {
        [Range(0, 100)]
        public int Assignments { get; set; }
        public int Groupproject { get; set; }
        public int Quizzes { get; set; }
        public int Exams { get; set; }
        public int Intex { get; set; }
    }
}
