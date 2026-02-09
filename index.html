<!DOCTYPE html>
<html lang="bn">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RUET Cover Page Generator - Blank Fields</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>
    <style>
        body { font-family: 'Times New Roman', serif; background-color: #f4f7f6; margin: 0; padding: 20px; display: flex; flex-direction: column; align-items: center; }
        .input-panel { background: white; padding: 25px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); margin-bottom: 30px; width: 100%; max-width: 750px; }
        .input-group { margin-bottom: 12px; }
        .input-group label { display: block; font-weight: bold; margin-bottom: 5px; color: #333; }
        .input-group input, .input-group textarea, .input-group select { width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 5px; box-sizing: border-box; font-size: 14px; }
        .type-selector { display: flex; gap: 20px; margin-bottom: 20px; background: #eef2f3; padding: 15px; border-radius: 8px; border: 1px solid #d1d8e0; }
        .btn-container { text-align: center; margin-top: 20px; }
        button { background: #007bff; color: white; border: none; padding: 12px 30px; border-radius: 5px; cursor: pointer; font-size: 16px; font-weight: bold; transition: 0.3s; }
        button:hover { background: #0056b3; }

        /* Cover Page Layout */
        #cover-page {
            width: 210mm;
            min-height: 297mm;
            padding: 20mm 25mm;
            margin: auto;
            background: white;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            align-items: center;
            line-height: 1.5;
            color: black;
            position: relative;
        }

        .header-motto { font-style: italic; color: #555; font-size: 14pt; margin-bottom: 10px; }
        .uni-name { font-size: 20pt; font-weight: bold; margin-bottom: 15px; text-align: center; }
        .logo-container { height: 120px; margin: 5px 0 15px 0; display: flex; justify-content: center; }
        #preview-logo { max-height: 100%; width: auto; }
        .dept-name { font-size: 16pt; font-weight: bold; margin-top: 5px; }
        .series-text { font-size: 18pt; font-weight: bold; }
        .report-title { font-size: 24pt; font-weight: bold; margin-bottom: 30px; }

        .content-body { width: 100%; display: flex; flex-direction: column; align-items: center; }
        .course-info { font-size: 15pt; text-align: center; margin-bottom: 30px; }
        
        .alignment-wrapper { width: 100%; max-width: 170mm; display: flex; flex-direction: column; align-items: flex-start; }

        .exp-section { margin-bottom: 40px; font-size: 15pt; width: 100%; }
        .exp-row { margin-bottom: 8px; display: flex; align-items: flex-start; }
        .exp-label { font-weight: bold; white-space: nowrap; }
        .triangle { font-size: 11pt; margin-right: 8px; }
        #outExpNo { color: black; font-weight: normal; }

        .submission-container { width: 100%; display: flex; justify-content: space-between; font-size: 15pt; margin-top: 10px; }
        .submission-box { width: 48%; }
        .sub-title { font-weight: bold; text-decoration: underline; margin-bottom: 12px; display: block; }
        .sub-details { line-height: 1.6; white-space: pre-line; }

        .date-section { position: absolute; bottom: 20mm; left: 25mm; font-size: 14pt; font-weight: bold; }
        .preview-area { background: #e2e2e2; padding: 40px 0; width: 100%; overflow-x: auto; }
    </style>
</head>
<body>

    <div class="input-panel">
        <h2 style="text-align:center; color:#2c3e50;">RUET Cover Page Generator</h2>
        
        <div class="type-selector">
            <label style="cursor: pointer;"><input type="radio" name="reportType" value="Lab Report" checked onchange="toggleType()"> Lab Report</label>
            <label style="cursor: pointer;"><input type="radio" name="reportType" value="Assignment" onchange="toggleType()"> Assignment</label>
        </div>

        <div class="input-group">
            <label>Upload Logo</label>
            <input type="file" id="logoInput" accept="image/*">
        </div>

        <div style="display: flex; gap: 15px;">
            <div class="input-group" style="flex:1"><label>Series</label><input type="text" id="inSeries" placeholder="e.g. 23 Series"></div>
            <div class="input-group" style="flex:1"><label>Course No</label><input type="text" id="inCourseNo" placeholder="e.g. IPE 1101"></div>
        </div>

        <div class="input-group"><label>Course Title</label><input type="text" id="inCourseTitle" placeholder="e.g. Engineering Economics"></div>

        <div style="display: flex; gap: 15px;">
            <div class="input-group" style="flex:1"><label id="labelNo">Experiment No</label><input type="text" id="inExpNo" placeholder="01"></div>
            <div class="input-group" style="flex:2"><label id="labelTitle">Experiment Title</label><input type="text" id="inExpTitle" placeholder="Enter Title Here"></div>
        </div>

        <div style="display: flex; gap: 15px;">
            <div class="input-group" style="flex:1">
                <label>Submitted By</label>
                <textarea id="inSubmittedBy" rows="4" placeholder="Name: ...&#10;Roll: ..."></textarea>
            </div>
            <div class="input-group" style="flex:1">
                <label>Submitted To</label>
                <textarea id="inSubmittedTo" rows="4" placeholder="Teacher's Name&#10;Designation&#10;Department"></textarea>
            </div>
        </div>

        <div class="input-group">
            <label>Date of Submission</label>
            <input type="text" id="inDate" placeholder="e.g. 10 February 2026">
        </div>

        <div class="btn-container"><button onclick="generatePDF()">Generate & Download PDF</button></div>
    </div>

    <div class="preview-area">
        <div id="cover-page">
            <div class="header-motto">Heaven's Light is Our Guide</div>
            <div class="uni-name">Rajshahi University of Engineering & Technology</div>
            <div class="logo-container"><img id="preview-logo" src="" alt=""></div>
            <div class="dept-name">Department of Industrial & Production Engineering</div>
            <div class="series-text" id="outSeries"></div>
            <div class="report-title" id="outMainTitle">Lab Report</div>

            <div class="content-body">
                <div class="course-info">
                    Course No: <span id="outCourseNo"></span><br>
                    Course <span style="text-decoration: underline;">Title</span> : <span id="outCourseTitle"></span>
                </div>

                <div class="alignment-wrapper">
                    <div class="exp-section">
                        <div class="exp-row">
                            <span class="exp-label"><span class="triangle">◢</span> <span id="outLabelNo">Experiment No.</span> :</span>
                            <span id="outExpNo" style="margin-left: 10px;"></span>
                        </div>
                        <div class="exp-row">
                            <span class="exp-label" style="padding-left: 22px;"><span id="outLabelTitle">Experiment Title</span> :</span>
                            <span id="outExpTitle" style="margin-left: 10px;"></span>
                        </div>
                    </div>

                    <div class="submission-container">
                        <div class="submission-box">
                            <span class="sub-title">Submitted by:</span>
                            <div class="sub-details" id="outSubmittedBy"></div>
                        </div>
                        <div class="submission-box">
                            <span class="sub-title">Submitted to:</span>
                            <div class="sub-details" id="outSubmittedTo"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="date-section">Date of Submission : <span id="outDate"></span></div>
        </div>
    </div>

    <script>
        function toggleType() {
            const type = document.querySelector('input[name="reportType"]:checked').value;
            const isAssignment = (type === "Assignment");
            document.getElementById('labelNo').innerText = isAssignment ? "Assignment No" : "Experiment No";
            document.getElementById('labelTitle').innerText = isAssignment ? "Assignment Name" : "Experiment Title";
            document.getElementById('outMainTitle').innerText = type;
            document.getElementById('outLabelNo').innerText = isAssignment ? "Assignment No." : "Experiment No.";
            document.getElementById('outLabelTitle').innerText = isAssignment ? "Assignment Name" : "Experiment Title";
            updatePreview();
        }

        const logoInput = document.getElementById('logoInput');
        const previewLogo = document.getElementById('preview-logo');

        window.onload = () => {
            const savedLogo = localStorage.getItem('ruet_logo_vfinal');
            if (savedLogo) previewLogo.src = savedLogo;
            updatePreview();
        };

        logoInput.addEventListener('change', function() {
            const file = this.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    previewLogo.src = e.target.result;
                    localStorage.setItem('ruet_logo_vfinal', e.target.result);
                }
                reader.readAsDataURL(file);
            }
        });

        const fields = ['inSeries', 'inCourseNo', 'inCourseTitle', 'inExpNo', 'inExpTitle', 'inSubmittedBy', 'inSubmittedTo', 'inDate'];
        fields.forEach(id => document.getElementById(id).addEventListener('input', updatePreview));

        function updatePreview() {
            fields.forEach(id => {
                const outId = id.replace('in', 'out');
                if(document.getElementById(outId)) {
                    document.getElementById(outId).innerText = document.getElementById(id).value;
                }
            });
        }

        function generatePDF() {
            const element = document.getElementById('cover-page');
            const typeName = document.querySelector('input[name="reportType"]:checked').value;
            const opt = {
                margin: 0,
                filename: `${typeName}_Cover.pdf`,
                image: { type: 'jpeg', quality: 1 },
                html2canvas: { scale: 3, useCORS: true },
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
            };
            html2pdf().set(opt).from(element).save();
        }
    </script>
</body>
</html>
