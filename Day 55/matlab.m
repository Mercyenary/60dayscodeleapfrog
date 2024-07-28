%=================  AM Modulation ==========================
clc;
clear all;
close all;
%######################## AM modulation Index ####################
disp('Enter the modulation Index.M<1(under)M>1(over) M=1(100%)modulation');
m=input(' Enter the value of modulation index M = ');

%########## modulating signal generation ####################XXXX
Am=1; % Amplitude of modulating signal
fa=2000; % Frequency of modulating signal
Ta=1/fa; % Time period of modulating signal
t=0:Ta/1000:6*Ta; % Total time for simulation
ym=Am*sin(2*pi*fa*t); % Eqation of modulating signal
figure(1)
subplot(4,1,1); 
plot(t,ym), grid on;% plot of Modulating signal
title ( '  Modulating Signal or Base band singnal   ');
xlabel ( ' time(sec) ');
ylabel (' Amplitud(volt)   ');
%#################### carrier signal ####################
Ac=Am/m;% Amplitude of carrier signal , modulation Index M=Am/Ac ]
fc=fa*10;% Frequency of carrier signal
Tc=1/fc;% Time period of carrier signal
yc=Ac*sin(2*pi*fc*t);% Eqation of carrier signal
subplot(4,1,2);
plot(t,yc), grid on;% plot of carrier signal
title ( '  Carrier Signal   ');
xlabel ( ' time(sec) ');
ylabel (' Amplitud(volt)   ');
%########################### AM Modulation ############################## 
y=Ac*(1+m*sin(2*pi*fa*t)).*sin(2*pi*fc*t); % Equation of Amplitude
%modulated signal
subplot(4,1,3);
plot(t,y);% Graphical representation of AM signal
title ( '  Amplitude Modulated signal  ');
grid on;
xlabel ( ' time(sec) ');
ylabel (' Amplitud(volt)   ');
%########################### AM Demodulation ############################## 
z=y.*yc;
[b a]=butter(1,0.001); %BUTTERWORTH FILTER
lpf=filter(b,a,z); 
Rx=1.5.*lpf; %Amplification
subplot(4,1,4);
plot(t,Rx);% Graphical representation of AM signal
title ( '  Amplitude Demodulated signal  ');
grid on;
xlabel ( ' time(sec) ');
ylabel (' Amplitud(volt)   ');