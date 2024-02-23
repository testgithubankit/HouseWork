"use client";
import { useState, useEffect } from 'react';
const FilterBox = ({ title }) => {
    const [selectImage, setSelectImage] = useState(title)
    return (
        <div className='transplantOrgans'>
            <div className='flex gap-2'>
                   <div className='hwFilterBox' style={{
                    border: selectImage === 'kidney' ? '1px solid #C8ADFF' : '1px solid #C5CEE0',
                    color: selectImage === 'kidney' ? '#6E2FEB' : '#101426',
                    backgroundColor: selectImage === 'kidney' ? '#F5F0FF' : '#ffff'
                    }}
                    onClick={() => setSelectImage('kidney')}>    
                    <img 
                    className='w-[36px]'
                    src={selectImage === 'kidney' ? '../images/search/kidney_active.svg' : '../images/search/kidney.svg'}
                    alt='React Image' />
                    <span className={`${
                            selectImage === 'kidney' ? 'text-[#6E2FEB]' : 'text-[#101426]'
                        }`}>Kidney</span>
                </div>
                <div className='hwFilterBox' style={{
                    border: selectImage === 'lungs' ? '1px solid #C8ADFF' : '1px solid #C5CEE0',
                    color: selectImage === 'lungs' ? '#6E2FEB' : '#101426',
                    backgroundColor: selectImage === 'lungs' ? '#F5F0FF' : '#ffff'
                    }}
                    onClick={() => setSelectImage('lungs')}
                >
                    
                    <img 
                    className='w-[36px]'
                    src={selectImage === 'lungs' ? '../images/search/lungs_active.svg' : '../images/search/lungs.svg'}
                    alt='React Image' />
                    <span className={`${
                        selectImage === 'lungs' ? 'text-[#6E2FEB]' : 'text-[#101426]'
                    }`}>Lungs</span>
                </div>
                <div className='hwFilterBox' style={{
                    border: selectImage === 'liver' ? '1px solid #C8ADFF' : '1px solid #C5CEE0',
                    color: selectImage === 'liver' ? '#6E2FEB' : '#101426',
                    backgroundColor: selectImage === 'liver' ? '#F5F0FF' : '#ffff'
                    }}
                    onClick={() => setSelectImage('liver')}
                >
                    <img 
                    className=''
                    src={selectImage === 'liver' ? '../images/search/liver_active.svg' : '../images/search/liver.svg'}
                    alt='React Image' />
                    <span className={`${
                        selectImage === 'liver' ? 'text-[#6E2FEB]' : 'text-[#101426]'
                    }`}>Liver</span>
                </div>
                <div className='hwFilterBox' style={{
                    border: selectImage === 'pancreas' ? '1px solid #C8ADFF' : '1px solid #C5CEE0',
                    color: selectImage === 'pancreas' ? '#6E2FEB' : '#101426',
                    backgroundColor: selectImage === 'pancreas' ? '#F5F0FF' : '#ffff'
                    }} onClick={() => setSelectImage('pancreas')}
                >
                    <img 
                    className='w-[36px]'
                    src={selectImage === 'pancreas' ? '../images/search/pancreas_active.svg' : '../images/search/pancreas.svg'}
                    alt='React Image' />
                     <span className={`${
                        selectImage === 'pancreas' ? 'text-[#6E2FEB]' : 'text-[#101426]'
                    }`}>Pancreas</span>
                </div>
              
            </div>
        </div>
    );
};


const Filter = ({ title }) => {
    const [selectImage1, setSelectImage1] = useState(title)
    return (
        <div className='oncologyOrgans'>
            <div className='flex gap-2 flex-wrap'>
            <div className='hwFilterBox' style={{
                    border: selectImage1 === 'lungs' ? '1px solid #C8ADFF' : '1px solid #C5CEE0',
                    color: selectImage1 === 'lungs' ? '#6E2FEB' : '#101426',
                    backgroundColor: selectImage1 === 'lungs' ? '#F5F0FF' : '#ffff'
                    }}
                    onClick={() => setSelectImage1('lungs')}
                >
                    
                    <img 
                    className='w-[36px]'
                    src={selectImage1 === 'lungs' ? '../images/search/lungs_active.svg' : '../images/search/lungs.svg'}
                    alt='React Image' />
                    <span className={`${
                        selectImage1 === 'lungs' ? 'text-[#6E2FEB]' : 'text-[#101426]'
                    }`}>Lungs</span>
                </div>
                <div className='hwFilterBox' style={{
                    border: selectImage1 === 'liver' ? '1px solid #C8ADFF' : '1px solid #C5CEE0',
                    color: selectImage1 === 'liver' ? '#6E2FEB' : 'rgb(16 20 28 / 80%)',
                    backgroundColor: selectImage1 === 'liver' ? '#F5F0FF' : '#ffff'
                }}
                    onClick={() => setSelectImage1('liver')}
                >
                    
                    <img 
                    className=''
                    src={selectImage1 === 'liver' ? '../images/search/liver_active.svg' : '../images/search/liver.svg'}
                    alt='React Image' />
                    <p className={`${
                    selectImage1 === 'liver' ? 'text-[#6E2FEB]' : 'text-gray-600 text-opacity-80'
                    }`}>Liver</p>
                </div>
                <div className='hwFilterBox' style={{
                    border: selectImage1 === 'pancreas' ? '1px solid #C8ADFF' : '1px solid #C5CEE0',
                    color: selectImage1 === 'pancreas' ? '#6E2FEB' : 'rgb(16 20 28 / 80%)',
                    backgroundColor: selectImage1 === 'pancreas' ? '#F5F0FF' : '#ffff'
                }}
                    onClick={() => setSelectImage1('pancreas')}
                >
                    <img 
                    className=''
                    src={selectImage1 === 'pancreas' ? '../images/search/pancreas_active.svg' : '../images/search/pancreas.svg'}
                    alt='React Image' />
                    <p className={`${
                    selectImage1 === 'pancreas' ? 'text-[#6E2FEB]' : 'text-gray-600 text-opacity-80'
                    }`}>Pancreas</p>
                </div>
                <div className='hwFilterBox' style={{
                    border: selectImage1 === 'bile_duct' ? '1px solid #C8ADFF' : '1px solid #C5CEE0',
                    color: selectImage1 === 'bile_duct' ? '#6E2FEB' : 'rgb(16 20 28 / 80%)',
                    backgroundColor: selectImage1 === 'bile_duct' ? '#F5F0FF' : '#ffff'
                }}
                    onClick={() => setSelectImage1('bile_duct')}
                >
                   
                    <img 
                    className=''
                    src={selectImage1 === 'bile_duct' ? '../images/search/bile_duct_active.svg' : '../images/search/bile_duct.svg'}
                    alt='React Image' />
                    <p className={`${
                    selectImage1 === 'bile_duct' ? 'text-[#6E2FEB]' : 'text-gray-600 text-opacity-80'
                    }`}>Bile duct</p>
                </div>
                <div className='hwFilterBox' style={{
                    border: selectImage1 === 'adrenal' ? '1px solid #C8ADFF' : '1px solid #C5CEE0',
                    color: selectImage1 === 'adrenal' ? '#6E2FEB' : 'rgb(16 20 28 / 80%)',
                    backgroundColor: selectImage1 === 'adrenal' ? '#F5F0FF' : '#ffff'
                }}
                    onClick={() => setSelectImage1('adrenal')}
                >
                    
                    <img 
                    className=''
                    src={selectImage1 === 'adrenal' ? '../images/search/adrenal_active.svg' : '../images/search/adrenal.svg'}
                    alt='React Image' />
                    <p className={`${
                    selectImage1 === 'adrenal' ? 'text-[#6E2FEB]' : 'text-gray-600 text-opacity-80'
                    }`}>Adrenal</p>
                </div>
                <div className='hwFilterBox' style={{
                    border: selectImage1 === 'rectum' ? '1px solid #C8ADFF' : '1px solid #C5CEE0',
                    color: selectImage1 === 'rectum' ? '#6E2FEB' : 'rgb(16 20 28 / 80%)',
                    backgroundColor: selectImage1 === 'rectum' ? '#F5F0FF' : '#ffff'
                }}
                    onClick={() => setSelectImage1('rectum')}
                >
                    <img 
                    className=''
                    src={selectImage1 === 'rectum' ? '../images/search/rectum_active.svg' : '../images/search/rectum.svg'}
                    alt='React Image' />
                    <p className={`${
                    selectImage1 === 'rectum' ? 'text-[#6E2FEB]' : 'text-gray-600 text-opacity-80'
                    }`}>Rectum</p>
                </div>
                <div className='hwFilterBox' style={{
                    border: selectImage1 === 'breast' ? '1px solid #C8ADFF' : '1px solid #C5CEE0',
                    color: selectImage1 === 'breast' ? '#6E2FEB' : 'rgb(16 20 28 / 80%)',
                    backgroundColor: selectImage1 === 'breast' ? '#F5F0FF' : '#ffff'
                }}
                    onClick={() => setSelectImage1('breast')}
                >
                
                    <img 
                    className=''
                    src={selectImage1 === 'breast' ? '../images/search/breast_active.svg' : '../images/search/breast.svg'}
                    alt='React Image' />
                    <p className={`${
                    selectImage1 === 'breast' ? 'text-[#6E2FEB]' : 'text-gray-600 text-opacity-80'
                    }`}>Breast</p>
                </div>
                <div className='hwFilterBox' style={{
                    border: selectImage1 === 'small intestine' ? '1px solid #C8ADFF' : '1px solid #C5CEE0',
                    color: selectImage1 === 'small intestine' ? '#6E2FEB' : 'rgb(16 20 28 / 80%)',
                    backgroundColor: selectImage1 === 'small intestine' ? '#F5F0FF' : '#ffff'
                }}
                    onClick={() => setSelectImage1('small intestine')}
                >
                   
                    <img 
                    className=''
                    src={selectImage1 === 'small intestine' ? '../images/search/small_intestine_active.svg' : '../images/search/small_intestine.svg'}
                    alt='React Image' />
                    <p className={`${
                    selectImage1 === 'small intestine' ? 'text-[#6E2FEB] text-center leading-4' : 'text-gray-600 text-opacity-80 text-center leading-4'
                    }`}>Small intestine</p>
                </div>
                <div className='hwFilterBox' style={{
                    border: selectImage1 === 'stomach' ? '1px solid #C8ADFF' : '1px solid #C5CEE0',
                    color: selectImage1 === 'stomach' ? '#6E2FEB' : 'rgb(16 20 28 / 80%)',
                    backgroundColor: selectImage1 === 'stomach' ? '#F5F0FF' : '#ffff'
                }}
                    onClick={() => setSelectImage1('stomach')}
                >
                    <img 
                    className=''
                    src={selectImage1 === 'stomach' ? '../images/search/stomach_active.svg' : '../images/search/stomach.svg'}
                    alt='React Image' />
                    <p className={`${
                    selectImage1 === 'stomach' ? 'text-[#6E2FEB]' : 'text-gray-600 text-opacity-80'
                    }`}>Stomach</p>
                </div>
                <div className='hwFilterBox' style={{
                    border: selectImage1 === 'colon' ? '1px solid #C8ADFF' : '1px solid #C5CEE0',
                    color: selectImage1 === 'colon' ? '#6E2FEB' : 'rgb(16 20 28 / 80%)',
                    backgroundColor: selectImage1 === 'colon' ? '#F5F0FF' : '#ffff'
                }}
                    onClick={() => setSelectImage1('colon')}
                >
                    <img 
                    className='max-w-[40px]'
                    src={selectImage1 === 'colon' ? '../images/search/colon_active.png' : '../images/search/colon.png'}
                    alt='React Image' />
                    <p className={`${
                    selectImage1 === 'colon' ? 'text-[#6E2FEB]' : 'text-gray-600 text-opacity-80'
                    }`}>Colon</p>
                </div>
              
            </div>
        </div>
    )
};

const HwSearchZip = (props) => {
    const [selectedTab, setSelectedTab] = useState(1);
    const [showInput, setShowInput] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedOption, setSelectedOption] = useState(props.prop1);
    const [selectedMutiple, setselectedMutiple] = useState(props.prop2);
    const [selectedZip, setSelectedZip] = useState('');
    // setSelectedOption(props.prop1)
    useEffect(() => {
        // Update the selectedZip when props.prop1 changes
        setSelectedZip(props.prop4 || '');
      }, [props.prop4]);
    const handleTabClick = (tab) => {
        setSelectedTab(tab);
        setSelectedZip(tab);
        if (tab === 0) {
            setShowInput(true);
        } else {
            setShowInput(false);
        }
    };

    // const handleInputChange = () => {
    //     setIsLoading(true);

    //     setTimeout(() => {
    //         setIsLoading(false);
    //     }, 2000);
    // };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
      };
    return (
        <div>
            {showInput ? (
                <div className='flex flex-wrap'>
                    <p style={{ marginTop: '30px', marginLeft: '6%' }}>Type a doctor’s or a hospital’s name to find relevant results.</p>
                    {/* <input type="text" defaultValue={selectedZip} onChange={handleInputChange} placeholder='zincode'/> */}
                    <input
                        type="text"
                        placeholder="Start typing"
                        style={{
                            marginTop: '30px', marginLeft: '6%', width: '28%', padding: '14px', borderRadius: '6px',
                            border: selectedZip === 'text' ? '1px solid red' : '1px solid #C5CEE0',
                        }}
                        onClick={() => setSelectedZip('text')}
                        onInput={handleInputChange}
                    />
                    {isLoading && <p>Loading...</p>}
                </div>
            ) : (
                <div className='zipCodeFilter'>
                    <h2 className='font-semibold mt-4 mb-2'>Zipcode</h2>
                    <input 
                    className='border rounded-md px-3 py-3 bg-[#f7f9fc] w-[186px]'
                    type="text" placeholder="Enter" defaultValue={selectedZip} onChange={handleInputChange}/>
                    <h2 className='font-semibold mt-4 mb-2'>Type</h2>
                    <div div className='flex items-center gap-2 justify-items-stretch'>
                        <div
                            className={`min-w-[100px] mt-1 px-4 py-3 border rounded-md cursor-pointer rounded-8 list-none ${selectedOption === 'transplant' ? 'border-1 border-[#C8ADFF] text-[#6E2FEB] bg-[#F5F0FF]' : 'border-1 border-[#C5CEE0] text-[rgba(16,20,28,80%)] bg-white'}`}
                            onClick={() => setSelectedOption('transplant')}
                        >Transplant
                        </div>
                        <div
                            className={`min-w-[100px] mt-1 px-4 py-3 border rounded-md cursor-pointer rounded-8 list-none ${selectedOption === 'oncology' ? 'border-1 border-[#C8ADFF] text-[#6E2FEB] bg-[#F5F0FF]' : 'border-1 border-[#C5CEE0] text-[rgba(16,20,28,80%)] bg-white'}`}
                            onClick={() => setSelectedOption('oncology')}
                        > Oncology
                        </div>
                    </div>
                    <div className='searchingFor'>
                        <h2 className='font-semibold mt-4 mb-1'>Searching For</h2>
                        <ul className='flex gap-2 items-center'>
                            <li 
                            className={`text-center w-[110px] mt-2 px-4 py-3 border rounded-md cursor-pointer rounded-8 list-none ${selectedMutiple === 'Doctor' ? 'border-1 border-[#C8ADFF] text-[#6E2FEB] bg-[#F5F0FF]' : 'border-1 border-[#C5CEE0] text-[rgba(16,20,28,80%)] bg-white'}`}
                            onClick={() => setselectedMutiple('Doctor')}
                            >
                                <img className='hidden block mx-auto' src='../images/search/hwDoctor.svg'/>
                                Doctor</li>
                            <li className={`text-center w-[110px] mt-2 px-4 py-3 border rounded-md cursor-pointer rounded-8 list-none ${selectedMutiple === 'Hospital' ? 'border-1 border-[#C8ADFF] text-[#6E2FEB] bg-[#F5F0FF]' : 'border-1 border-[#C5CEE0] text-[rgba(16,20,28,80%)] bg-white'}`}
                            onClick={() => setselectedMutiple('Hospital')}
                            >
                                <img 
                                className='hidden block mx-auto'
                                src='../images/search/hwHospital.svg'/>
                                Hospital</li>
                        </ul>
                    </div>
                    {selectedTab === 1 ? (
                        <div>
                            {selectedOption === 'oncology' || selectedMutiple === 'Hospital' || (
                            <div>
                                <h2 className='font-semibold mt-4 mb-2'>Organ</h2>
                                {/* Render 4 boxes for Transplant */}
                                <FilterBox title={props.prop3} />
                            </div>
                            )}
                            {selectedOption === 'transplant' || selectedMutiple === 'Hospital' || (
                            <div className=''>
                                {/* Render 10 boxes for Cancer */}
                                <h2 className='font-semibold mt-4 mb-2'>Organ</h2>
                                <Filter title={props.prop3} />
                            </div>
                            )}
                        </div> 
                    ) : (
                        <div>
                            <div>
                                <FilterBox title={props.prop3} />
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default HwSearchZip;