from django import forms
BUILDING_LIST =( 
    ("39.72786079343008,-121.84729082054753,O'Connell Center", 'O\'Connell Hall'),
    ("39.72747763926558,-121.84696559524535,Langdon Hall" ,"Langdon Hall"),
    ("39.729408290689484,-121.84348322002653,Arts and Humanities", "Arts and Humanities"), 
    ("39.72881007297421,-121.84433079807523,Performing Arts Center", "Performing Arts Center"), 
    ("39.72863038312888,-121.8498702988007,Yolo Hall", "Yolo Hall"), 
    ("39.730658400597356,-121.84885337563796,Whitney Hall", "Whitney Hall"),
    ("39.730348983900065,-121.84866025658889,Chico Hub", "Chico Hub"), 
    ("39.73075328810629,-121.84867634984298,Sutter Hall","Sutter Hall"),
    ("39.73021098881368,-121.84950620550569,Acker Gymnasium","Acker Gymnasium"),
    ("39.73006225652085,-121.84837326022429,Tehema Hall", "Tehama"),
    ("39.73006225652085,-121.84734597417159,Butte Hall", "Butte Hall"),
    ("39.730594454593756,-121.8474747202043,Lassen Hall", "Lassen Hall"), 
    ("39.73114727614851,-121.8478498395154,Shasta Hall", "Shasta Hall"), 
    ("39.72913615803178,-121.84636322673197,Glenn Hall", "Glenn Hall"),
    ("39.729629169986254,-121.8457382720315,Colusa Hall", "Colusa Hall"),
    ("39.72808325310959,-121.845107952913,Bell Memorial Union (BMU)", "Bell Memorial Union (BMU)"),
    ("39.729737639284245,-121.84605477269525,Continuing Education Center", "Continuing Education Center"), 
    ("39.72966544121481,-121.84477535899515,Kendall Hall", "Kendall"),
    ("39.730024368013574,-121.84516696151132,Selveser's Cafe", "Selveser's Cafe"), 
    ("39.729001215428426,-121.84537617381449,Trinity Hall", "Trinity Hall"),
    ("39.72733418762445,-121.84587939393114,Student Services Center (SSC)", "Student Services Center (SSC)"), 
    ("39.73145111066418,-121.84753202886935,University Housing Office", "University Housing Office"), 
    ("39.72935698981375,-121.84903633993237,Shurmer Gymnasium", "Shurmer Gymnasium"), 
    ("39.729608652454175,-121.84834969442456,Plumas Hall", "Plumas Hall"),
    ("39.731016897747175,-121.84535178177333,Holt Hall", "Holt Hall"),
) 

class mapForm(forms.Form):
    buildingName = forms.ChoiceField(choices = BUILDING_LIST, 
        label = "Enter the building name",
        required = False,
    )    			
