function showAddClass() {
  var x = document.getElementById("add-class-form");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function disableFormFields() {
  console.log("Dashbaord js is working");
  var checkbox = document.getElementById("has_lab");
  var labDay = document.getElementById("lab_day");
  var labStartTime = document.getElementById("lab_start_time");
  var labEndTime = document.getElementById("lab_end_time");

  if (checkbox.checked == true) {
    labDay.disabled = false;
    labStartTime.disabled = false;
    labEndTime.disabled = false;
  } else {
    labDay.disabled = true;
    labStartTime.disabled = true;
    labEndTime.disabled = true;
  }
}

let availableCourses = [
  "AAHP",
  "ACCT",
  "ADMN",
  "AEEE",
  "AERO",
  "AFRS",
  "AMST",
  "ANTH",
  "ARBC",
  "ARCH",
  "ARSC",
  "ARTA",
  "ARTB",
  "ARTC",
  "ARTD",
  "ARTE",
  "ARTF",
  "ARTG",
  "ARTH",
  "ARTL",
  "ARTM",
  "ARTP",
  "ARTR",
  "ARTT",
  "ARTZ",
  "ATRN",
  "BDBA",
  "BINF",
  "BIOL",
  "BLAW",
  "BPHD",
  "BUSA",
  "BUSN",
  "CAPI",
  "CEGR",
  "CHEM",
  "CHFD",
  "CHNS",
  "CJUS",
  "CLAS",
  "CMET",
  "COAA",
  "COMM",
  "CSLG",
  "CTCM",
  "CUYC",
  "DANC",
  "DSBA",
  "DTSC",
  "ECGR",
  "ECON",
  "EDCI",
  "EDUC",
  "EIST",
  "ELDT",
  "ELED",
  "ELET",
  "ELTI",
  "EMGT",
  "ENER",
  "ENGL",
  "ENGR",
  "ENTR",
  "EPID",
  "ESCI",
  "ETCE",
  "ETEL",
  "ETFS",
  "ETGR",
  "ETME",
  "EXER",
  "FARS",
  "FILM",
  "FINN",
  "FLED",
  "FRAN",
  "FREN",
  "FRST",
  "GEOG",
  "GEOL",
  "GERM",
  "GRAD",
  "GRNT",
  "HADM",
  "HAHS",
  "HCIP",
  "HGHR",
  "HHUM",
  "HIST",
  "HLTH",
  "HONR",
  "HPSY",
  "HSMT",
  "HSRD",
  "HTAS",
  "IBUS",
  "IDST",
  "INES",
  "INFO",
  "INST",
  "INTE",
  "INTL",
  "ITCS",
  "ITIS",
  "ITLN",
  "ITSC",
  "JAPN",
  "JOUR",
  "KNES",
  "LACS",
  "LBST",
  "LEGL",
  "LTAM",
  "MAED",
  "MALS",
  "MATH",
  "MBAD",
  "MDGK",
  "MDLG",
  "MDSK",
  "MEGR",
  "METR",
  "MFPA",
  "MGMT",
  "MKTG",
  "MPAD",
  "MSCI",
  "MSMG",
  "MSRE",
  "MUDD",
  "MUED",
];

const resultBox = document.querySelector(".course-results");
const searchBox = document.getElementById("course-search");

searchBox.onkeyup = function () {
  let result = [];
  let input = searchBox.value;
  if (input.length) {
    result = availableCourses.filter((keyword) => {
      return keyword.toUpperCase().includes(input.toUpperCase());
    });
  }
};

function display(result) {
  const content = result.map((list) => {
    return "<li>" + list + "<li>";
  });
  resultBox.innerHTML;
}
