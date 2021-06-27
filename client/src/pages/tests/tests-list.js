class Test {
    set testResult(result) {
        if (result !== -1) {
            this.testResultString = `last result: ${result}%`;
        } else {
            this.testResultString = "last result: none"
        }
    }

    get testResult() {
        return this.testResultString;
    }

    constructor(name, result, description, diff) {
        this.testName = name;
        this.testResult = result;
        this.testDescription = description;
        this.testDiff = diff;
    }
}

let tests_mech = [
    new Test("basic concepts", -1, "basic diffinitions and consepts of mechanic", "light"),
    new Test("uniform movement", 82, "movement without acceleration and its properties", "light"),
    new Test("accelerated movement", 47, "movement with acceleration and uniformly accelerated motion and its properties", "normal"),
    new Test("movement at an angle to the horizon", -1, "derivation of formulas for motion at an angle to the horizon and its properties", "normal"),
    new Test("circular motion", 30, "derivation of formulas for circular motion, its properties, acceleration decomposition", "hard"),
];

let tests_mol = [
    new Test("Heat capacity of gases and solids", "none", "the heat capacity of gases and solids, the Mayer ratio, LawDulong and Petit, and their output", "normal"),
    new Test("Real gas", "47%", "real gas, experimental isotherm of real gas, critical state of matter, Avenarius experiment", "light"),
    new Test("The first and third provisions", "none", "the dependence of the interaction forces of molecules on the distance between them", "hard"),
    new Test("The second provision of the MKT", "27%", "Stern's experiment, Maxwell's distribution of molecules by velocities", "hard"),
    new Test("Isochoric process", "30%", "Charles ' law, molecular and energyinterpretation", "light"),
];

let tests_ele = [
    new Test("Operation and current power", "30%", "operation and current power on a homogeneous and inhomogeneous section of the circuit", "light"),
    new Test("Electrostatic field", "none", "intensity, methods of graphic representation of fields", "normal"),
    new Test("The Gauss Theorem", "47%", "its application (the field of a plane, the field of two planes, the field of a sphere and a basll), its outout ", "hard"),
    new Test("potential difference", "27%", "characteristics of the electrostatic field, the relationship of tension with potential difference", "hard"),
    new Test("Electric current", "none", "conditions of its existence, current strength, voltage, Ohm's law for a complete circuit", "light"),
];


let tests_mag = [
    new Test("Methods for determining the magnetic field", "none", "magnetic induction vector, a unit of measurement, Oersted's experience", "normal"),
    new Test("Ampere Power", "82%", "the effect of a magnetic field on a conductor with a current", "light"),
    new Test("The Lorentz force", "47%", "mechanics of motion of a charged particle in a magnetic field", "hard"),
    new Test("The flow of the magnetic induction vector", "none", "Faraday's experiments, the law of electromagnetic induction, Lenz's Rule", "normal"),
    new Test("The phenomenon of self-induction", "30%", "inductance, a unit of measurement, calculation of the inductance of the solenoid", "hard"),
];
let tests_opt = [
    new Test("Approximations of geometric optics", "none", "rectilinear propagation of light, shadow, partial shade", "normal"),
    new Test("Refraction", "none", "the laws of refraction, complete internal reflection, plane-parallel plate", "hard"),
    new Test("Optical systems", "none", "the optical power of the systems, classification of optical devices, telescope", "light"),
    new Test("Light interference", "none", "Newton's rings, interference in thin films, illumination of optics", "normal"),
    new Test("Light diffraction. Fresnel diffraction", "none", "Poisson's spot, wave plates, diffraction on Young's slits. Diffraction grating", "hard"),
];

let allTests = new Map();
allTests.set("mechanics", tests_mech);
allTests.set("molecular", tests_mol);
allTests.set("electrodynamics", tests_ele);
allTests.set("magnetism", tests_mag);
allTests.set("optics", tests_opt);